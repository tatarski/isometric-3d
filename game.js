var field = getField(5, 10, 10, function valueForCoordinates(floor, row, column) {
  if(floor < 3) {
    return 1;
  }else {
    return 0;
  }
});
field[3][4][4] = 1;
var side_length = 50;
var playerFloor = 3, playerRow = Math.floor(field.rows/2), playerColumn = Math.floor(field.columns/2);

function update() {
}
function draw() {
  drawField(field, side_length, 300, 300, playerFloor, playerRow, playerColumn);
}
function canChangeColumn(columnDelta, playerFloor, playerRow, playerColumn, field) {
  return playerColumn + columnDelta >= 0 && playerColumn + columnDelta < field.columns;
}
function canChangeRow(rowDelta, playerFloor, playerRow, playerColumn, field) {
  return playerRow + rowDelta >= 0 && playerRow + rowDelta < field.rows;
}
function keyup(key) {
  var columnDelta = 0, rowDelta = 0;
  // W
  if(key == 87) {
    rowDelta = -1
  }
  // S
  if(key == 83) {
    rowDelta = +1;
  }
  // A
  if(key == 65) {
    columnDelta = -1;
  }
  // D
  if(key == 68) {
    columnDelta = +1;
  }
  if(columnDelta && canChangeColumn(columnDelta, playerFloor, playerRow, playerColumn, field)) {
    playerColumn += columnDelta;
  }
  if(rowDelta && canChangeRow(rowDelta, playerFloor, playerRow, playerColumn, field)) {
    playerRow += rowDelta;
  }
}
function mouseup() {
}
