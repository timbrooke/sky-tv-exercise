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

export function calcContain(w1, h1, w2, h2) {
  const r1 = w1 / w2;
  const r2 = h1 / h2;
  const ratio = Math.max(r1, r2);
  const w3 = w1 / ratio;
  const h3 = h1 / ratio;
  return { w: w3, h: h3 };
}

export function stopVideo(video) {
  const stream = video.srcObject;
  if (stream !== null && stream !== undefined) {
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
  if (dimensions.width <= 0 && dimensions.height <= 0) return null;
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
  return resizedDimensions;
}
