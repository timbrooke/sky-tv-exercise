import React, { useRef, useEffect, useState } from "react";
import { Button, Container } from "semantic-ui-react";
import styled from "styled-components";
import { initFaceAPI, startVideo, stopVideo, trackFace } from "../utils/video";

const VideoCanvas = styled.canvas`
  width: 600px;
  height: 600px;
  background-color: grey;
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const HiddenVideo = styled.video`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

const VideoArea = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const trackingFlag = useRef(false);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const videoPlayHander = () => {
    handleVideoStarted();
  };

  const trackingLoop = () => {
    if (trackingFlag.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      trackFace(video, canvas);
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
  };

  const handleVideoStarted = () => {
    console.log("video started");
    const video = videoRef.current;
    video.removeEventListener("play", videoPlayHander);
    startTrackingVideo();
  };

  const handleButtonClick = async () => {
    const canvas = canvasRef.current;
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

  return (
    <>
      <HiddenVideo autoPlay={true} ref={videoRef} />
      <VideoCanvas ref={canvasRef} />
      <Button
        size="large"
        onClick={handleButtonClick}
        disabled={buttonDisabled}
        primary
      >
        Press the button here to begin.
      </Button>
    </>
  );
};

export default VideoArea;
