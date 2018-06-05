$(document).ready(function(){

  var columns = 20;
  var rows = 20;
  var $table = $('#snakeBoard');
  var idCounter = 1;
  var colCounter = 0;
  // Makes a grid of 400 squares on start-up
  $('#startGame').click(function(){

    for (var i = 0; i < columns; i++) {
      var row = $(`<tr class="snakeRow" id="${ colCounter }"></tr>`);
      colCounter++;
      $table.append(row);


      for (var j = 0; j < rows; j++) {
        var col = $(`<td class="boardPixel" id="${ idCounter }"> </td>`);
        idCounter++;
        row.append(col);
      }
    }

    $(this).unbind('click');

// Where the snake head spawns
    var snake = Math.floor(Math.random() * 401);
    var snakeArr = [];
// Loops 3 times to create a body of 3
    for (var i = 0; i < 3; i++) {
      snake++;
      snakeArr.push(snake);
      $(`#${snake}`).css('background','green');
    }
// Where the snake head spawns
    var apple = Math.floor(Math.random() * 401);
    var appleArr = [];
// Loops 3 times to create a body of 3
    for (var i = 0; i < 1; i++) {
      apple++;
      snakeArr.push(snake);
      $(`#${apple}`).css('background','red');
    }


  }); //start game function ends


  // reset button
  $('#reset').click(function(){
    location.reload();
  }) // reset button end

}); //document end
