function drawField(field, sideLength, cameraX, cameraY) {
  for(var floor = 0; floor < field.floors; floor++) {
    for(var row = 0; row < field.rows; row++) {
      for(var column = 0; column < field.columns; column++) {
        if(field[floor][row][column] === 1) {
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
}
function getField(floors, rows, columns) {
  var field = [];
  field.floors = floors;
  field.rows = rows;
  field.columns = columns;

  for(var floor = 0; floor < floors; floor++) {
    field[floor] = [];
    for(var row = 0; row < rows; row++) {
      field[floor][row] = [];
      for(var column = 0; column < columns; column++) {
        field[floor][row][column] = Math.floor(Math.random()*2);
      }
    }
  }
  return field;
}