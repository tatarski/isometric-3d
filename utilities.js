function fromFieldToScreenX(floor, row, column, sideLength) {
  return 0*floor - row*sideLength/2 + column*sideLength
}
function fromFieldToScreenY(floor, row, column, sideLength) {
  return -floor*sideLength + row*sideLength/2 + 0*sideLength;
}