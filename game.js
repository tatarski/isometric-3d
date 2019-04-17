var field = getField(6, 10, 10, function valueForCoordinates(floor, row, column) {
  if(floor < 3) {
    return 1;
  }else {
    return 0;
  }
});
field[3][4][4] = 1;
field[3][6][6] = 1;
field[4][6][6] = 1;
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
function getStepColumn(stepColumnDelta, stepRowDelta, floor, row, column, field) {
  // If already on border of field
  if (column + stepColumnDelta <= 0 || column + stepColumnDelta >= field.columns) {
    return column;
  }
  // If obstacle in line and nothing on top
  if (floor + 1 < field.floors &&
    field[floor][row][column + stepColumnDelta] === 1 &&
    field[floor + 1][row][column + stepColumnDelta] === 0) {
    return column + stepColumnDelta;
  }
  // If going to fall more than two blocks in this direction
  if (floor >= 2 &&
    field[floor][row][column+stepColumnDelta] === 0 &&
    field[floor - 1][row][column + stepColumnDelta] === 0 &&
    field[floor - 2][row][column + stepColumnDelta] === 0) {
    return row;
  }
  // No obstacle in line
  if (field[floor][row][column + stepColumnDelta] === 0) {
    return column + stepColumnDelta;
  }
  return column;
}
function getStepFloor(stepColumnDelta, stepRowDelta, floor, row, column,field) {
  // Right left movement climb
  if (floor + 1 < field.floors &&
    field[floor][row][column + stepColumnDelta] === 1 &&
    field[floor + 1][row][column + stepColumnDelta] === 0) {
    return floor + 1;
  }
  // Up down movement climb
  if (floor + 1 < field.floors &&
    field[floor][row + stepRowDelta][column] === 1 &&
    field[floor + 1][row + stepRowDelta][column] === 0) {
    return floor + 1;
  }
  return floor;
}
function getStepRow(stepColumnDelta, stepRowDelta, floor, row, column ,field) {
  // If already on border of field
  if (row + stepRowDelta < 0 || row + stepRowDelta >= field.rows) {
    return row;
  }
  // If obstacle on line and nothing on top
  if (floor + 1< field.floors &&
    field[floor][row + stepRowDelta][column] === 1 &&
    field[floor + 1][row + stepRowDelta][column] === 0) {
    return row + stepRowDelta;
  }
  // If going to fall more than two blocks in this direction
  if (floor >= 2 &&
    field[floor][row+stepRowDelta][column] === 0 &&
    field[floor - 1][row + stepRowDelta][column] === 0 &&
    field[floor - 2][row + stepRowDelta][column] === 0) {
    return row;
  }
  // No obstacle in line
  if (field[floor][row + stepRowDelta][column] === 0) {
    return row + stepRowDelta;
  }
  return row;
}
function keyup(key) {
  var columnDelta = 0, rowDelta = 0;
  // W
  if(key === 87) {
    rowDelta = -1
  }
  // S
  if(key === 83) {
    rowDelta = +1;
  }
  // A
  if(key === 65) {
    columnDelta = -1;
  }
  // D
  if(key === 68) {
    columnDelta = +1;
  }
  var newFloor = getStepFloor(columnDelta, rowDelta, playerFloor, playerRow, playerColumn, field);
  var newColumn = getStepColumn(columnDelta, rowDelta, playerFloor, playerRow, playerColumn, field);
  var newRow = getStepRow(columnDelta, rowDelta, playerFloor, playerRow, playerColumn, field);

  playerFloor = newFloor;
  playerRow = newRow;
  playerColumn = newColumn;

  if(playerFloor > 0 &&
    field[playerFloor - 1][playerRow][playerColumn] === 0) {
    playerFloor--;
  }
}
function mouseup() {
}
