let userScore = 0
let computerScoreA = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScoreN = document.querySelector("#userScore")
const compScoreN = document.querySelector("#computerScore")

const getCompChoices = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIndx = Math.floor(Math.random()*3)
    return options[ranIndx]
}

const drawGame = () => {

    msg.innerText="it was a draw";
    msg.style.backgroundColor ="black"

}

const showWinner =  (userWin, choiceId, compChoice) => {
    if (userWin){
            userScore++ ;
            userScoreN.innerText=userScore;
            msg.innerText=`you win, your ${choiceId} beats ${compChoice}`;
            msg.style.backgroundColor ="Green";
    }else{
        computerScoreA++ ;
        compScoreN.innerText=computerScoreA;
        msg.innerText=`you lost, ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor ="Red";
    }
}

const playGame = (choiceId) =>{
    const compChoice = getCompChoices()

    if(choiceId === compChoice){
        drawGame()

    }else {
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compChoice==="paper"? false : true;
        }else if(choiceId === "paper"){
            userWin = compChoice === "scissors"? false : true;
        }else{
            userWin = compChoice === "rock"? false : true ;
        }
        showWinner(userWin, choiceId, compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId)

    })
})