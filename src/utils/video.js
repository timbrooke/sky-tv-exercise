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
  return { w: w3, h: h3, r: ratio };
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

function drawCrossHairs(ctx, dimensions, rect, height) {
  if (dimensions.length < 1) return;
  const box = dimensions[0].detection.box;
  if (box) {
    const x = (box.left + box.right) / 2;
    const y = (box.top + box.bottom) / 2;
    ctx.strokeStyle = "#0000ff";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, rect.h);
    ctx.moveTo(0, y);
    ctx.lineTo(rect.w, y);
    ctx.stroke();

    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`x: ${x.toFixed(2)}`, 10, height - 35);
    ctx.fillText(`y: ${y.toFixed(2)}`, 10, height - 10);
  }
}

export async function trackFace(video, screenCanvas) {
  const detection = await faceapi.detectAllFaces(video).withFaceExpressions();
  // .withFaceLandmarks()
  const dimensions = { width: video.videoWidth, height: video.videoHeight };
  const destRect = calcContain(
    dimensions.width,
    dimensions.height,
    screenCanvas.width,
    screenCanvas.height
  );
  const screenCanvasDimensions = {
    width: destRect.w,
    height: destRect.h,
  };
  if (dimensions.width <= 0 && dimensions.height <= 0) return null;
  const resizedDimensions = faceapi.resizeResults(detection, dimensions);
  const resizedDimensions2 = faceapi.resizeResults(
    detection,
    screenCanvasDimensions
  );

  // Draw video to offscreen canvas
  const canvas = faceapi.createCanvasFromMedia(video);
  const destCtx = screenCanvas.getContext("2d");
  destCtx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
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

  // Draw marking to screenCanvas
  faceapi.draw.drawDetections(screenCanvas, resizedDimensions2);
  faceapi.draw.drawFaceExpressions(screenCanvas, resizedDimensions2);
  // faceapi.draw.drawFaceLandmarks(screenCanvas, resizedDimensions2);
  drawCrossHairs(destCtx, resizedDimensions2, destRect, screenCanvas.height);
  return resizedDimensions;
}
