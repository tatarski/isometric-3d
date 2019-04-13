// All coordinates are cube draw coordinates - closer left corner of cube
var defaultFillStyle = "grey";
function strokeFrontSide(x, y, sideLength) {
  context.strokeRect(x - sideLength / 2, y + sideLength / 2, sideLength, sideLength);
}
function fillFrontSide(x, y, sideLength) {
  context.fillRect(x - sideLength / 2, y + sideLength / 2, sideLength, sideLength);
}
function plotTopSide(x, y, sideLength) {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + sideLength, y);
  context.lineTo(x + sideLength/2, y + sideLength/2);
  context.lineTo(x - sideLength/2, y + sideLength/2);
  context.closePath();
}
function strokeTopSide(x, y, sideLength) {
  plotTopSide(x, y, sideLength);
  context.stroke();
}
function fillTopSide(x, y, sideLength) {
  plotTopSide(x, y, sideLength);
  context.fill();
}
function plotRightSide(x, y, sideLength) {
  context.beginPath();
  context.moveTo(x + sideLength, y);
  context.lineTo(x + sideLength, y + sideLength);
  context.lineTo(x + sideLength / 2, y + sideLength + sideLength / 2);
  context.lineTo(x + sideLength / 2, y + sideLength / 2);
  context.closePath();
}
function strokeRightSide(x, y, sideLength) {
  plotRightSide(x, y, sideLength);
  context.stroke();
}
function fillRightSide(x, y, sideLength) {
  plotRightSide(x, y, sideLength);
  context.fill();
}
function drawCube(x, y, sideLength, topFillStyle, rightFillStyle, frontFillStyle) {
  if (topFillStyle) {
    context.fillStyle = topFillStyle;
  } else {
    context.fillStyle = defaultFillStyle;
  }
  fillTopSide(x, y, sideLength);
  strokeTopSide(x, y, sideLength);

  if (rightFillStyle) {
    context.fillStyle = rightFillStyle;
  } else {
    context.fillStyle = defaultFillStyle;
  }
  fillRightSide(x, y, sideLength);
  strokeRightSide(x, y, sideLength);

  if (frontFillStyle) {
    context.fillStyle = frontFillStyle;
  } else {
    context.fillStyle = defaultFillStyle;
  }
  fillFrontSide(x, y, sideLength);
  strokeFrontSide(x, y, sideLength);
}
