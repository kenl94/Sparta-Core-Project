$(document).ready(function(){
  // console.log('working');

  /*  Pseudo Code
  - I should have a variable counter to count the points which should have a dom selector to make it responsive to the change in points

  I should have a variable with the timer?(check to see how to make timer) that the dom can select

  I should have a function with keypress to be able to up down left right

  I should have a onclick function to reset the game (either in the board or outside) with the dom

  I should have a function that makes the snake progressively faster depending on the points

  I should have a function which creates new apples for the snake to eat in a random place.. maybe with Math.random?? but there should only be 1 option and when it creates the apple, it means that the snake has eaten it so should make the snake grow

  I need to make sure the snake game ends if the player collides into the border or itself

  if statement to add points depending on how long the user lasts in the Game

  I should have a dom selector to change the color of the board


  */

  // The amount of columns for the board
  var columns = 20;
  // The amount of rows for the board
  var rows = 20;
  var $table = $('#snakeBoard');
  var $start = $('#startGame');
  var snake = [];
  var $reset = $('#reset');
  var idCounter = 0;
  // Press to start the game and it creates the board for the player to play
  $('#startGame').click(function(){
    // loops to check the column, and it will append that amount of tr
    for (var i = 0; i < columns; i++) {
      var row = $('<tr class="snakeRow"></tr>');
      $table.append(row);

      // loops to check the rows, and it will append that amount of td
      for (var j = 0; j < rows; j++) {
        var col = $(`<td class="boardPixel" id="${ idCounter }"> </td>`);
        idCounter++;
        row.append(col);
      }
    }
    // Stops the board from appending more tr and td
    $(this).unbind('click');

    // PLACING INTIAL SNAKE USING FOR LOOP
    // the tr and td are in a array with 400 squares, randomly targets one
    var snake = Math.floor(Math.random() * 400); // Random number between 0-400
    var snakeArr = []; // empty snake array

    for (var i = 0; i < 3; i++) { // loop though 3 times
      snake++; // increase snake
      snakeArr.push(snake); // push snake into array
      $(`#${snake}`).css('background','black'); // use current snake id to change background
    }

    // MOVING SNAKE USING INTERVAL
    setInterval(function(){
      // Add to Head
      snake++;
      snakeArr.push(snake);
      $(`#${snake}`).css('background','black');
      // remove from tail
      $(`#${snakeArr[0]}`).css('background','lightgrey');
      snakeArr.splice(0,1);

      console.log(snakeArr);
    },1000);

    for (var i = 0; i < 3; i++) { // loop though 3 times
      snake+= 20; // increase snake
      snakeArr.push(snake); // push snake into array
      $(`#${snake}`).css('background','black'); // use current snake id to change background
    }

    // MOVING SNAKE USING INTERVAL
    setInterval(function(){
      // Add to Head
      snake+=20;
      snakeArr.push(snake);
      $(`#${snake}`).css('background','black');
      // remove from tail
      $(`#${snakeArr[0]}`).css('background','lightgrey');
      snakeArr.splice(0,1);

      console.log(snakeArr);
    },1000);






    // setInterval(function(){
    //
    // },1000)




    // var snakePos = 50;
    // var snakeBodyPos = 51;
    //     console.log($('.boardPixel'));
    // // one of the pixels chosen by index as index is the arr
    // var snakeHead = $('.boardPixel')[snakePos];
    // var snakeBody = $('.boardPixel')[snakeBodyPos];
    // var apple = $('.boardPixel')[applePos];
    // // The snake will appear green
    // snakeHead.style.background = 'green';
    // snakeBody.style.background = 'lightGreen';
    // apple.style.background = 'red';
    //
    // snake.push(snakeBody, snakeHead);
    // console.log(snake);



    $('#reset').click(function(){
      location.reload();
    })

  });//start.click end function








}); // document.ready close
