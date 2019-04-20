function fromFieldToScreenX(floor, row, column, sideLength) {
  return 0*floor - row*sideLength/2 + column*sideLength
}
function fromFieldToScreenY(floor, row, column, sideLength) {
  return -floor*sideLength + row*sideLength/2 + 0*sideLength;
}
function dist2d(x, y, x1, y1) {
  return Math.sqrt((x-x1)*(x-x1) + (y-y1)*(y-y1));
}