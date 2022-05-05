function computerPlay() {
    function getRandomNum(a, b) {
        return Math.random() * (b - a) + a;   //Finds random value 
      }
    
    c=Math.trunc(getRandomNum(1,4));          //Truncates random value chosen between 1 and 4
        
    option =""

        if (c == 1) {
            option = "Rock";}                  //Computer randomizes between rock, paper, scissors by random selecting 1, 2 or 3
        else if (c == 2) {
            option = "Paper";}
        else if (c == 3) {
            option = "Scissors";}

    
    return option;
        
}


function playRound(playerSelection,computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Choose between Rock, Paper and Scissors");    
    decision="";

    switch(playerSelection.toUpperCase()) {                             //switch-case sets the main game logic, .toUpperCase() makes the user's choice case insensitive
        case "ROCK":
            if (computerSelection.toUpperCase() == "ROCK") {
                decision="Tis a Tie"
                console.log(decision);
            }
            
            if (computerSelection.toUpperCase() == "PAPER") {
                decision="You Lose!"
                console.log(decision);
            }

            if (computerSelection.toUpperCase() == "SCISSORS") {
                decision="You Win!"
                console.log(decision);
            }
            break;

        case "PAPER":
            if (computerSelection.toUpperCase() == "ROCK") {
                decision="You Win!"
                console.log(decision);
            }
            
            if (computerSelection.toUpperCase() == "PAPER") {
                decision="Tis a Tie"
                console.log(decision);
            }

            if (computerSelection.toUpperCase() == "SCISSORS") {
                decision="You Lose!"
                console.log(decision);
            }
            break; 
            
        case "SCISSORS":
            if (computerSelection.toUpperCase() == "ROCK") {
                decision="You Lose!"
                console.log(decision);
            }
            
            if (computerSelection.toUpperCase() == "PAPER") {
                decision="You Win!"
                console.log(decision);
            }

            if (computerSelection.toUpperCase() == "SCISSORS") {
                decision="Tis a Tie"
                console.log(decision);
            }
            break;
    
        default:
            decision="Try again"
            console.log(decision);
    
        }
    return decision;
}

function game() {
    wins = 0;
    ties = 0;
    losses = 0;

    for(let i=0 ; i<5 ; i++) {
        result=playRound();                                 //for-loop sets a best of 5 game
        if (result == "You Win!") {
            wins += 1;
        }

        else if (result == "Tis a Tie") {
            ties += 1;
        }

        else if (result == "You Lose!") {
            losses += 1;
        }
        else if (result == "Try again") {                   //if the user makes an error the round is nullified.
            i--;
        }
    }

if ((ties == 2) && (losses == 2)) {
    console.log("You Lost To The Computer");                //sets various cases to determine the winner of the game.
}
if ((wins == 2) && (losses == 1)) {
    console.log("You Beat The Computer");
}
if (wins >= 3 ) {
    console.log("You Beat The Computer");
}

if (losses >= 3) {
    console.log("You Lost To The Computer");
}
if (ties >= 3) {
    console.log("You Tied With The Computer");
}
}

game();