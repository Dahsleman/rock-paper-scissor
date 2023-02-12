function getComputerChoice(){
    let answers = ["rock","paper","scissor","rock","paper","scissor","rock","paper","scissor"];
    var index = Math.floor(Math.random() * answers.length);
    return answers[index]
}

function rockChoice() {
    let choise = "Rock";
    if (choise != null ) {
        var playerSelection = choise.toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        document.getElementById("result").innerHTML = result
        game(result) 
        return 

    }  
}

function paperChoice() {
    let choise = "Paper";
    if (choise != null ) {
        var playerSelection = choise.toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        document.getElementById("result").innerHTML = result
        game(result) 
        return 

    }  
}

function scissorChoice() {
    let choise = "Scissor";
    if (choise != null ) {
        var playerSelection = choise.toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        document.getElementById("result").innerHTML = result
        game(result) 
        return 

    }  
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        answer = "You Lose! Paper beats Rock"; 
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        answer = "You Win! Rock beats Scissor"; 
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        answer = "You Lose! Scissor beats Paper"; 
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        answer = "You Win! Paper beats Rock"; 
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        answer = "You Lose! Rock beats Scissor"; 
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        answer = "You Win! Scissor beats Paper"; 
    }
    else {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection) 
    }
    
    return answer
}

let computer = 0;
let player = 0;
let winner = null;

function game(result) {

    if (result == "You Lose! Paper beats Rock" || result == "You Lose! Scissor beats Paper" || result == "You Lose! Rock beats Scissor"  ) {
        computer++
        document.getElementById("score").innerHTML = "Computer:"+computer+" x "+"Player:"+player
        
    }
    else {
        player++
        document.getElementById("score").innerHTML = "Computer:"+computer+" x "+"Player:"+player

    }

    if (computer==5) {
        document.getElementById("score").innerHTML = "Computer:"+computer+" x "+"Player:"+player
        winner = "Computer won!!"    
        document.getElementById("winner").innerHTML = winner
        setTimeout(() => alert("Let's play again?"));
        window.location.reload()
        return
    }
    else if (player==5) {
        document.getElementById("score").innerHTML = "Computer:"+computer+" x "+"Player:"+player
        winner = "Player won!!"    
        document.getElementById("winner").innerHTML = winner
        setTimeout(() => alert("Let's play again?"));
        window.location.reload()
        return
    }

}

