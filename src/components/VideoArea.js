import React, { useRef, useEffect, useState, useContext } from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { initFaceAPI, startVideo, stopVideo, trackFace } from "../utils/video";
import ExpressionGauges from "./ExpressionGauges";
import ValuesBuffer from "../utils/ValuesBuffer";
import { VP } from "../components/Basics";
import Jumper from "../utils/Jumper";
import { useHistory } from "react-router-dom";
import { store } from "../store/store";

const VideoCanvas = styled.canvas`
  width: 600px;
  height: 600px;
  background-color: grey;
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const Columns = styled.div`
  width: 100%;
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const HiddenVideo = styled.video`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

const expressionDefaults = [
  { label: "angry", value: 0 },
  { label: "disgusted", value: 0 },
  { label: "fearful", value: 0 },
  { label: "happy", value: 0 },
  { label: "neutral", value: 0 },
  { label: "sad", value: 0 },
  { label: "surprised", value: 0 },
];

const objectToArray = (obj) => {
  const keys = Object.keys(obj);
  return keys.map((key) => ({ label: key, value: obj[key] }));
};

const VideoArea = () => {
  const history = useHistory();
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const expressionsBufferRef = useRef();
  const videoRef = useRef();
  const canvasRef = useRef();
  const trackingFlag = useRef(false);

  const [expressions, setExpressions] = useState(expressionDefaults);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const bufferLength = 400;
  expressionsBufferRef.current = new ValuesBuffer(bufferLength);

  const videoPlayHander = () => {
    handleVideoStarted();
  };

  const trackingLoop = async () => {
    if (trackingFlag.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const result = await trackFace(video, canvas);
      if (result && Array.isArray(result) && result.length > 0) {
        const currentExpressions = result[0].expressions;
        const buffer = expressionsBufferRef.current;
        buffer.receive(currentExpressions);
        const averages = buffer.getAverages();
        setExpressions(objectToArray(averages));
      }
      window.requestAnimationFrame(trackingLoop);
    }
  };

  const startTrackingVideo = () => {
    trackingFlag.current = true;
    window.requestAnimationFrame(trackingLoop);
  };

  const stopTrackingVideo = () => {
    trackingFlag.current = false;
    const video = videoRef.current;
    stopVideo(video);
    setButtonDisabled(false);
  };

  const handleVideoStarted = () => {
    console.log("video started");
    const video = videoRef.current;
    video.removeEventListener("play", videoPlayHander);
    startTrackingVideo();
  };

  const handleStopButtonClick = () => {
    stopTrackingVideo();
  };

  const handleButtonClick = async () => {
    const video = videoRef.current;
    video.addEventListener("play", videoPlayHander);
    startVideo(video);
    setButtonDisabled(true);
  };

  useEffect(() => {
    initFaceAPI();
    return () => {
      stopTrackingVideo();
    };
  }, []);

  function handleClickProceed() {
    Jumper.getInstance().jumpTo("Between", history, dispatch);
  }

  return (
    <Columns>
      <div>
        <HiddenVideo autoPlay={true} ref={videoRef} />
        <VideoCanvas ref={canvasRef} width={600} height={600} />

        <Button
          size="large"
          onClick={handleButtonClick}
          disabled={buttonDisabled}
          color="green"
        >
          Press to start.
        </Button>
        <Button
          size="large"
          onClick={handleStopButtonClick}
          disabled={!buttonDisabled}
          color="red"
        >
          Press to stop.
        </Button>
        <Button onClick={handleClickProceed} size="large">
          Press to Proceed - when done.
        </Button>
        <VP style={{ paddingTop: "40px" }}>
          Please look directly into the camera and begin the test by pressing
          the green button.
        </VP>
      </div>
      <Column>
        <ExpressionGauges expressions={expressions} />
      </Column>
    </Columns>
  );
};

export default VideoArea;
