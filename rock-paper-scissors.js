let wins = 0
let losses = 0
let ties = 0
const buttons = document.querySelectorAll('input')



function computerPlay() {
    function getRandomNum(a, b) {
        return Math.random() * (b - a) + a;   //Finds random value 
      }
    
    c=Math.trunc(getRandomNum(1,4));          //Truncates random value chosen between 1 and 4
        
    option =""

        if (c == 1) {
            option = "rock";}                  //Computer randomizes between rock, paper, scissors by random selecting 1, 2 or 3
        else if (c == 2) {
            option = "paper";}
        else if (c == 3) {
            option = "scissors";}

    
    return option;
        
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })}

function playRound(playerSelection) {
  
let computerSelection = computerPlay();
let decision="";
let final_decision = "";

    if ((playerSelection == "rock" && computerSelection == "scissors") ||  
        (playerSelection == "paper" && computerSelection == "rock") ||  
        (playerSelection == "scissors" && computerSelection == "paper")) {
            
            wins += 1
            decision = "You Win ! " + "<br><br>Player score: " + wins + "<br>Computer score: " + losses + "<br>Ties: " + ties
            

            if (wins == 5) {
                final_decision += "\n\nYou Beat The Computer!"
                disableButtons()
            }
        }
    
    else if (playerSelection == computerSelection) {
            decision = "It's a Tie!" + "<br><br>Player score: " + wins + "<br>Computer score: " + losses + "<br>Ties: " + ties
            ties+=1
    }
    
    
    else { 
            losses += 1
            decision ="You Lose !" + "<br><br>Player score: " + wins + "<br>Computer score: " + losses + "<br>Ties: " + ties
            

            if (losses == 5) {
                final_decision += "\n\nYou Lost To The computer"
                disableButtons()
            }
    }

    

    document.getElementById('results').innerHTML = decision
    const f_decision = document.createElement('div')
    f_decision.classList.add('fdecision')
    const res = document.querySelector('#results')
    f_decision.textContent = final_decision
    res.appendChild(f_decision)
    

    return 

}



buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)}
        
        )})


