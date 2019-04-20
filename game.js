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
field[2][9][5] = 0;
field[1][9][5] = 0;

var side_length = 50;
var playerFloor = 3, playerRow = Math.floor(field.rows/2), playerColumn = Math.floor(field.columns/2);
var playerActualFloor = playerFloor, playerActualRow = playerRow, playerActualColumn = playerColumn;
var playerMovementFactor = 10;

function update() {
  if(playerFloor !== 0) {
    while(field[playerFloor - 1][playerRow][playerColumn] === 0) {
      playerFloor--;
    }
  }
  // playerActualFloor += (playerFloor - playerActualFloor)/playerMovementFactor;
  // playerActualRow += (playerRow - playerActualRow)/playerMovementFactor;
  // playerActualColumn += (playerColumn- playerActualColumn)/playerMovementFactor;
}

function draw() {
  drawField(field, side_length, 300, 300, playerFloor, playerRow, playerColumn);
}
function isMoveOutOfBounds(rowDelta, columnDelta, floor, row, column, field) {
  return row + rowDelta < 0 || row + rowDelta > field.rows - 1 ||
    column + columnDelta < 0 || column + columnDelta > field.columns - 1;
}
function canMoveStepForward(rowDelta, columnDelta, floor, row, column, field) {
  // If block ahead
  if (field[floor][row + rowDelta][column + columnDelta] === 1) {
    return false;
  }
  // If going to fall more than two blocks
  if (floor > 1 &&
    field[floor - 1][row+rowDelta][column + columnDelta] === 0 &&
    field[floor - 2][row+rowDelta][column + columnDelta] === 0) {
    return false;
  }
  return true;
}
function canClimbStepForward(rowDelta, columnDelta, floor, row, column, field) {
  if (floor === field.floors - 1) {
    return false;
  }
  // If there is a block above
  if (field[floor + 1][row][column] === 1) {
    return false;
  }

  if (field[floor][row + rowDelta][column + columnDelta] === 1 &&
      field[floor + 1][row + rowDelta][column + columnDelta] === 0) {
    return true;
  }
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
  if(!isMoveOutOfBounds(rowDelta, columnDelta, playerFloor, playerRow, playerColumn, field)) {
    if (canMoveStepForward(rowDelta, columnDelta, playerFloor, playerRow, playerColumn, field)) {
      playerRow += rowDelta;
      playerColumn += columnDelta;
    } else if(canClimbStepForward(rowDelta, columnDelta, playerFloor, playerRow, playerColumn, field)) {
      playerRow += rowDelta;
      playerColumn += columnDelta;
      playerFloor += 1;
    }
  }
}
function mouseup() {
}
