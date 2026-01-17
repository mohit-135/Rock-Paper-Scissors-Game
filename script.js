let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg')

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("game was draw.")
    msg.innerHTML = "Game Was Draw. Play Again"
    msg.style.backgroundColor = "blue";

}

const showWinner = (userWin ,userChoice ,compChoice ) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log("you win");
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log("You Lose");
        msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}


const playGame = (userChoice) => {
    console.log(userChoice,"is choosen by user");

    const compChoice = genCompChoice();
    console.log(compChoice,"is choosen by comp");


    if(userChoice === compChoice){
        //draw game
        drawGame()
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //compchoice = scissors paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice ==="paper") {
            //scissor rock
            userWin = compChoice === "scissors" ? false :true;
        }else{
            //paper rock
            userWin = compChoice ==="rock" ? false :true;
        }
    showWinner(userWin, userChoice, compChoice );
    }

}

choices.forEach((choice) => {
    choice.addEventListener('click',() => {

        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
      
    });
})