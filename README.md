# Roll-The-Dice-Two-Players-JavaScript-ES6-Game-
JavaScript ES6 | Learning MERN Stack | Roll The Dice: Two Players JavaScript ES6 Game! | 11 July 2023

Developed by:\
Abhishek kumar\
https://www.linkedin.com/in/abhishek-kumar-bb094427a/

Development TimeStamp\
11 to 14, July 2023

User Interface Design:\
Figma, HTML5, CSS3

Logic & Interactivity\
JavaScript ES6

About this Game:\
Roll The Dice: Two Players JavaScript ES6 Game!\
It's a two players game, where each player rolls the dice one by one. whenever player rolls the dice whatever number came out in dice is updated as the current score, now current player having the choice to whatever add this score to his total score by pressing the hold button and passing the turn to the next player. Otherwise if current player wishes to play the game he rolled the dice once again and if dice rolled out to be 1, all of the current score of the player is set to 0, and turn is passed to next player. The first player to make score of 50 is the winner.

What is the current score and how it is computed?\
initially the current score is 0, every time the user rolls the dice the whatever number rolled out is added to the current score.

What happens when dice rolled out to be 1?\
whenever dice rolled out to be 1, the current score of the current player is set to 0, and game turn is passed to next player.

What is the high score?\
initially high score of both the players is 0, after pressing the hold button whatever the current score it got added to the high score

What is the difference among current vs. high scores?\
the current scores are computed when the dice is rolled and on each time player rolls the dice current score is updated with the new value of the dice rolled, for. e.g. 
initially current score is 0, and player rolled the dice to be 6
then current score would be 0 + 6 and assume player rolled the dice again and dice tossed to 4, then 
current score would be 0 + 6 + 4, all this ha

What hold button?\
the hold button adds the current score to the total score of the current player, and ends the current player turn, and make next player as the current player.

How winner of this game is chosen?\
Any player after pressing the hold button, if the high score comes out to be greater than or equals to 50, then that player is marked as winner.

What New game button does?\
It reset the GUI, current and high scores of both the players to the default, and make player 1 as the current player.

what Roll Dice button does?\
It provides dice rolling functionality, and update the screen with the dice form 1 to 6.
