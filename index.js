'user strict';
let isPlayerOnePlayingTheGame = true;
let isPlayerOneTheWinner = false;
let isGameEnded = false;
let isItDevelopmentMode = true;
let currentScore =0, highScore=0;
let playersScores = [[0,0], // PlayerNo, current, HighScore
                     [0,0]
                   ]; 
let isUpdatedHighScoreFetched = false;
///////////////////////
// Btn New Game
///////////////////////
document.querySelector('#btnNewGame').addEventListener('click', function(){
  // #1. preparing the stage graphics by setting player #1 as current player
    // highlighting player #1
    document.querySelector("#sectionPlayer1").classList.add("activePlayerHighlighting");
    document.querySelector("#sectionPlayer1").classList.remove("inActivePlayerHighlighting");
   // unhighlighting player #2
    document.querySelector("#sectionPlayer2").classList.remove("activePlayerHighlighting");
    document.querySelector("#sectionPlayer2").classList.add("inActivePlayerHighlighting");
  // GUI updating current and high socres to 0 for both players
    document.querySelector("#sectionPlayer1 .currentPlayerHighScore").innerHTML =  0;
    document.querySelector("#sectionPlayer1 .currentScore").innerHTML = 0;
    document.querySelector("#sectionPlayer2 .currentPlayerHighScore").innerHTML =  0;
    document.querySelector("#sectionPlayer2 .currentScore").innerHTML = 0;
  // #2 Reset Current & HighScores of both players to 0
      isPlayerOnePlayingTheGame = true;
      isGameEnded = false;
      isItDevelopmentMode = false;
      currentScore=0;
      highScore=0;
      playersScores = [[0,0], // PlayerNo, current, HighScore
                       [0,0]
                        ]; 
      isUpdatedHighScoreFetched = false;
  // #3 Removing the dice graphic from the screen   
    document.querySelector(".dice").innerHTML = ""; 
});

////////////////////
// Btn Hold Scores
//////////////////
document.querySelector('#btnHold').addEventListener('click', function(){
    if(isNaN(currentScore) ||  isNaN(highScore) || (currentScore ==0) || (highScore == 0)){
      return false;
    }
   

  // highscore needs to be fetched fresh for the next player
  isUpdatedHighScoreFetched = false;
          
  // Prepare the Stage Graphics, by Setting next player as current Player
  // also keeping track of who is current player, and
  // unhighlighitng current player
    if(isPlayerOnePlayingTheGame){
      isPlayerOnePlayingTheGame = false;
      // unhighlighitng current player
        document.querySelector("#sectionPlayer1").classList.remove("activePlayerHighlighting");
        document.querySelector("#sectionPlayer1").classList.add("inActivePlayerHighlighting");
      // highlighting next player
        document.querySelector("#sectionPlayer2").classList.add("activePlayerHighlighting");
        document.querySelector("#sectionPlayer2").classList.remove("inActivePlayerHighlighting");
      // updating screen with currentPlayer High Score
        // highScore += playersScores[0][1];
        playersScores[0][1] += currentScore;
        document.querySelector("#sectionPlayer1 .currentPlayerHighScore").innerHTML =  playersScores[0][1];
        highScore =  playersScores[0][1];
      // Displaying Current score to 0
        document.querySelector("#sectionPlayer1 .currentScore").innerHTML = 0;
// console.log("Player #1 is paying the game and high score is " + highScore);        
      // 2. Is current Player Score greater than 50?
        if(highScore>=50){
          // current player is the Winner
          // update the StageGraphics by Setting background of Winning Player to Gold
            document.querySelector("#sectionPlayer1").classList.remove("activePlayerHighlighting");
            document.querySelector("#sectionPlayer1").classList.remove("inActivePlayerHighlighting");
            document.querySelector("#sectionPlayer1").classList.add("winner");
          // mark game end
            isGameEnded = true;
        }

    }else{
      isPlayerOnePlayingTheGame = true;
      // highlighting next player
        document.querySelector("#sectionPlayer1").classList.add("activePlayerHighlighting");
        document.querySelector("#sectionPlayer1").classList.remove("inActivePlayerHighlighting");
      // unHighlighting next player
        document.querySelector("#sectionPlayer2").classList.remove("activePlayerHighlighting");
        document.querySelector("#sectionPlayer2").classList.add("inActivePlayerHighlighting");
      // updating screen with currentPlayer High Score
        // highScore += playersScores[1][1];
        playersScores[1][1] += currentScore;
        document.querySelector("#sectionPlayer2 .currentPlayerHighScore").innerHTML =  playersScores[1][1];
        highScore =  playersScores[1][1];
        
      // Displaying Current score to 0
        document.querySelector("#sectionPlayer2 .currentScore").innerHTML = 0;
// console.log("Player #2 is paying the game and high score is " + highScore);        
      // 2. Is current Player Score greater than 50?
        if(highScore>=50){
// console.log('hi');          
          // current player is the Winner
          // update the StageGraphics by Setting background of Winning Player to Gold
          document.querySelector("#sectionPlayer2").classList.remove("activePlayerHighlighting");
          document.querySelector("#sectionPlayer2").classList.remove("inActivePlayerHighlighting");
          document.querySelector("#sectionPlayer2").classList.add("winner");
          // mark game end
            isGameEnded = true;
        }
    }  
    // removing the dice from the screen
      document.querySelector(".dice").innerHTML = "";

  if(isItDevelopmentMode){
    console.log("HighScore: " + playersScores[0][1] + " " + playersScores[1][1]);
  }

  // Safeguard
    currentScore =0;
    highScore = 0;    
});

// Btn Roll Dice
document.querySelector('#btnRollDice').addEventListener('click', function(){
  // Safeguard
    if(isGameEnded){  
        let msg = `Game has ended Player ${isPlayerOnePlayingTheGame?"1":"2"} has won the game`;
        alert(msg);
        return false;
    }
  // 1. Generate random no from 1 to 6
    let diceRolled = Math.trunc(Math.random()*6) + 1;
 
// diceRolled = 1;    
  // 2. Update Dice Graphics on Stage
    let diceGraphics;
    // Choosing the Dice Graphics, based on the random no generated
    switch(diceRolled){
      case 1:
        diceGraphics = "⚀";
        break;
      case 2:
        diceGraphics = "⚁";
        break;
      case 3:
        diceGraphics = "⚂";
        break;
      case 4:
        diceGraphics = "⚃";
        break;
      case 5:
        diceGraphics = "⚄";
        break;
      case 6:
        diceGraphics = "⚅";
        break;
      default:
        console.error("ERROR: Random No. generated by dice is above range (1,6), = " + diceRolled);
        return false;
    }

// diceRolled +=30;   

    document.querySelector(".dice").innerHTML = diceGraphics;
  // 3. update current player current and high score
    // updating player 1 scores
      if(isPlayerOnePlayingTheGame){
        // fetching highScore and Current Score once for current user       
        if(!isUpdatedHighScoreFetched){
          isUpdatedHighScoreFetched = true;
          highScore = playersScores[0][1];
          if(highScore == 0){
            highScore = diceRolled;
          }
          currentScore = diceRolled;
        } else {
          currentScore += diceRolled;
          highScore += diceRolled;

        }
        // Updating current Score to the Game GUI                
          document.querySelector("#sectionPlayer1 .currentScore").innerHTML = currentScore;
      }else{
        // fetching highScore and Current Score once for current user       
        if(!isUpdatedHighScoreFetched){
          isUpdatedHighScoreFetched = true;
          highScore = playersScores[1][1];
          if(highScore == 0){
            highScore = diceRolled;
          }
          currentScore = diceRolled;
        } else {
          currentScore += diceRolled;
          highScore += diceRolled;
        }
        document.querySelector("#sectionPlayer2 .currentScore").innerHTML = currentScore;
      }


  // 4. Is Dice rolled out #1?
      if(diceRolled == 1){
        // highscore needs to be fetched fresh for the next player
          isUpdatedHighScoreFetched = false;
        
        // Prepare the Stage Graphics, by Setting next player as current Player
        // also keeping track of who is current player, and
        // unhighlighitng current player
            if(isPlayerOnePlayingTheGame){
              isPlayerOnePlayingTheGame = false;
              // unhighlighitng current player
                document.querySelector("#sectionPlayer1").classList.remove("activePlayerHighlighting");
                document.querySelector("#sectionPlayer1").classList.add("inActivePlayerHighlighting");
              // highlighting next player
                document.querySelector("#sectionPlayer2").classList.add("activePlayerHighlighting");
                document.querySelector("#sectionPlayer2").classList.remove("inActivePlayerHighlighting");
             
              // Displaying Current score to 0
                document.querySelector("#sectionPlayer1 .currentScore").innerHTML = 0;
            }else{
              isPlayerOnePlayingTheGame = true;
              // highlighting next player
                document.querySelector("#sectionPlayer1").classList.add("activePlayerHighlighting");
                document.querySelector("#sectionPlayer1").classList.remove("inActivePlayerHighlighting");
              // unHighlighting next player
                document.querySelector("#sectionPlayer2").classList.remove("activePlayerHighlighting");
                document.querySelector("#sectionPlayer2").classList.add("inActivePlayerHighlighting");
              // Displaying Current score to 0
                document.querySelector("#sectionPlayer2 .currentScore").innerHTML = 0;
            }         
      }
   

})