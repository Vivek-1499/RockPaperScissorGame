let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

// Light/Dark Mode Toggle
const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", toggle.checked);
});


const compChoice = () => {
    const randChoice = Math.floor(Math.random() * 3);
    switch (randChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const draw = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw! Play again!";
    msg.style.backgroundColor = "rgb(0, 13, 42)";

}

const playGame = (userChoice) => {
    console.log(`User choice: ${userChoice}`);
    const computerChoice = compChoice();
    console.log(`Computer choice: ${computerChoice}`);

    if (userChoice === computerChoice) {
        draw();
    }else{
        let userWin = true;
        if (userChoice === "rock" && computerChoice === "paper") {
            userWin = false;
        } else if (userChoice === "paper" && computerChoice === "scissors") {
            userWin = false;
        } else if (userChoice === "scissors" && computerChoice === "rock") {
            userWin = false;
        }
        winner(userWin, computerChoice, userChoice);
    }
}

const winner = (userWin, computerChoice, userChoice) => {
    if(userWin){
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScoreDisplay.innerText = ++userScore;
    } else{
        console.log("Computer wins!");
        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScoreDisplay.innerText = ++compScore;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.id;
        playGame(userChoice);
    })
})