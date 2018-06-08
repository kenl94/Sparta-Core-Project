# Sparta-Snake

### Description

Created a Game Coded with JavaScript as a Project for Sparta Global. For the project, the game I've chosen is the classic game of Snake.

### Installation
1. Go to my [Github](https://github.com/kenl94)
2. Find the folder named Sparta-Core-Project-One and copy the SSH Key or the https repo link.
3. Go onto your terminal and ```git clone *insert link*```
4. It will be downloaded and you are able to run it through opening the index.html on your own system.

### Instructions
To start the game you would click on the start game button on the top left hand side of the screen.  </br> It will run automatically.  
To control the snake you can use the arrow keys which will move it to the direction you want.
</br>
The aim of the game is to create a high score, to do this you would make the snake grow by colliding the snake with the red block.

### Requirements
1. Timer
2. ScoreBoard
3. Instructions
4. No Canvas
5. No Alerts or Prompts

### Challenges
During the  project, I wasn't very confident with javascript and this proved to be a a challenge at first.
As I started coding, I got familiar with javascript and got more comfortable.

The most challenging part of the project was with the snake movement. If the snake was going right, and I pressed left it would overlap causing the game to end.
This is because the javascript would read that it has bitten into itself.

### Code

```javascript
  function moveSnake(){
      if (direction === 'up') {
        if (snakeArr[snakeArr.length -1] > 0 && snakeArr[snakeArr.length -1] <= 20){
          snake+= 380;
          snakeArr.push(snake);
        } else {
          snake-=20;
          snakeArr.push(snake);
        }
```  

### Improvements for the future
Going forward, I hope to be able to add sounds to the game and a scoreboard to see other players high scores. </br>
I also hope to be able to make the snake levels for the user to choose. </br>
I would also add a trigger which depends on the score to make it harder. </br>
