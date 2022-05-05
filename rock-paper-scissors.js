function computerPlay() {
    function getRandomNum(a, b) {
        return Math.random() * (b - a) + a;
      }
    
    c=Math.trunc(getRandomNum(1,4));
        
    option =""

        if (c == 1) {
            option = "Rock";}
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

    switch(playerSelection.toUpperCase()) {
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
        choice=playRound();
        if (choice == "You Win!") {
            wins += 1;
        }

        else if (choice == "Tis a Tie") {
            ties += 1;
        }

        else if (choice == "You Lose!") {
            losses += 1;
        }
        else if (choice == "Try again") {
            i--;
        }
    }

if ((ties == 2) && (losses == 2)) {
    console.log("You Lost To The Computer");
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