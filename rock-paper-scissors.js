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

    console.log(option)
    return option;
        
}



d=computerPlay();

function userPlay(playerSelection,computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Choose between Rock, Paper and Scissors");
    

    switch(playerSelection.toUpperCase()) {
        case "ROCK":
            if (computerSelection.toUpperCase() == "ROCK") {
                console.log("Tis a Tie");
            }
            
            if (computerSelection.toUpperCase() == "PAPER") {
                console.log("You Lose!");
            }

            if (computerSelection.toUpperCase() == "SCISSORS") {
                console.log("You Win!");
            }
            break;

        case "PAPER":
            if (computerSelection.toUpperCase() == "ROCK") {
                console.log("You Win!");
            }
            
            if (computerSelection.toUpperCase() == "PAPER") {
                console.log("Tis a Tie");
            }

            if (computerSelection.toUpperCase() == "SCISSORS") {
                console.log("You Lose!");
            }
            break; 
            
        case "SCISSORS":
            if (computerSelection.toUpperCase() == "ROCK") {
                console.log("You Lose!");
            }
            
            if (computerSelection.toUpperCase() == "PAPER") {
                console.log("You Win!");
            }

            if (computerSelection.toUpperCase() == "SCISSORS") {
                console.log("Tis a Tie");
            }
            break;
    
        default:
            console.log("Try again");
    
        }

}

userPlay();