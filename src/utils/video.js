import * as faceapi from "face-api.js";

export function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

export async function getVideoSources() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((d) => d.kind === "videoinput");
}

export async function startVideo(video, deviceId = undefined) {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { deviceId },
  });
  video.srcObject = stream;
  return true;
}

function calcContain(w1, h1, w2, h2) {
  const r1 = w2 / w1;
  const r2 = h2 / h1;
  const ratio = Math.min(r1, r2);
  const w3 = ratio * w1;
  const h3 = ratio * h1;
  console.log(w1, h1, w2, h2, w3, h3);
  return { w: w3, h: h3 };
}

export function stopVideo(video) {
  const stream = video.srcObject;
  if (stream !== null) {
    const tracks = stream.getTracks();
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      track.stop();
    }
  }
  video.srcObject = null;
}

export async function initFaceAPI() {
  await faceapi.nets.ssdMobilenetv1.loadFromUri("/faceapi/weights");
  await faceapi.nets.faceLandmark68Net.loadFromUri("/faceapi/weights");
  await faceapi.nets.faceExpressionNet.loadFromUri("/faceapi/weights");
}

export async function trackFace(video, screenCanvas) {
  const detection = await faceapi.detectAllFaces(video).withFaceExpressions();
  const dimensions = { width: video.videoWidth, height: video.videoHeight };
  if (dimensions.width > 0 && dimensions.height > 0) {
    const resizedDimensions = faceapi.resizeResults(detection, dimensions);
    const canvas = faceapi.createCanvasFromMedia(video);
    faceapi.draw.drawDetections(canvas, resizedDimensions);
    faceapi.draw.drawFaceExpressions(canvas, resizedDimensions);
    const destCtx = screenCanvas.getContext("2d");
    const destRect = calcContain(
      dimensions.width,
      dimensions.height,
      screenCanvas.width,
      screenCanvas.height
    );
    console.log(destRect);
    destCtx.drawImage(
      canvas,
      0,
      0,
      dimensions.width,
      dimensions.height,
      0,
      0,
      destRect.w,
      destRect.h
    );
  }
}
