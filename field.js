function drawField(field,
                   sideLength,
                   cameraX,
                   cameraY,
                   playerFloor,
                   playerRow,
                   playerColumn) {
  for(var floor = 0; floor < field.floors; floor++) {
    for(var row = 0; row < field.rows; row++) {
      for(var column = 0; column < field.columns; column++) {
        if(floor === playerFloor &&
          row === playerRow &&
          column === playerColumn) {
          defaultFillStyle = "red";
        } else if(field[floor][row][column] === 1) {
          defaultFillStyle = "yellow";
        } else {
          continue
        }
        drawCube(
            cameraX + fromFieldToScreenX(
            floor, row, column, sideLength
            ),
            cameraY + fromFieldToScreenY(
            floor, row, column, sideLength
            ),
            sideLength
          );
      }
    }
  }
}
function getField(floors, rows, columns, valueForCoordinates) {
  var field = [];
  field.floors = floors;
  field.rows = rows;
  field.columns = columns;

  for(var floor = 0; floor < floors; floor++) {
    field[floor] = [];
    for(var row = 0; row < rows; row++) {
      field[floor][row] = [];
      for(var column = 0; column < columns; column++) {
        field[floor][row][column] = valueForCoordinates(floor, row, column);
      }
    }
  }
  return field;
}