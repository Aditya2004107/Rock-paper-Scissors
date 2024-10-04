let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#u-result");
const userscorep = document.querySelector("#you-Point");
const compscorep = document.querySelector("#comp-Point");

// computer Input

const genCompChoice = () => {
  const option = ["Rock", "Paper", "Scissors"];
  const radidx = Math.floor(Math.random() * 3);
  return option[radidx];
};

// For Draw
const DrawGame = () => {
  msg.innerText = "Ooh Your Game is Draw : Play Again :) ";
  msg.style.backgroundColor = "#081b31";
};

// For Winner element Show
const showWinner = (userWin, userchoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userscorep.innerText = userScore;
    msg.innerText = `You Win! Your ${userchoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compscorep.innerText = compScore;
    msg.innerText = `You Lose :) ${CompChoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Main
const playgame = (userchoice) => {
  console.log("Your Choice is ", userchoice);
  const CompChoice = genCompChoice();

  if (userchoice === CompChoice) {
    DrawGame();
  } else {
    let userWin = true;
    if (userchoice === "Rock") {
      userWin = CompChoice === "Paper" ? false : true;
    } else if (userchoice === "Paper") {
      userWin = CompChoice === "Scissors" ? false : true;
    } else {
      userWin = CompChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userchoice, CompChoice);
  }
};

// Access The All Input From User
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");

    playgame(userchoice);
  });
});
