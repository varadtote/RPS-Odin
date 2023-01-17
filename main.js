

let ComputerGuess = [
    "Rock",
    "Paper",
    "Scissor"
]

let UserGuess = [
    "Rock",
    "Paper",
    "Scissor"
]
// let rUserGuess = UserGuess[Math.floor(Math.random() * ComputerGuess.length)];
let rComputerGuess = 0;
let rUserGuess = 0;

let ComputerScore = 0;
let UserScore = 0;

// let result = "";
// let result = document.querySelector('#result');
let resultsDiv = document.querySelector('#results');
function func() {
    location.reload();
}

function Play() {
    // while (ComputerScore || UserScore == 5)
    // while (ComputerScore < 5 && UserScore < 5 || ComputerScore == 5 && UserScore == 5) {

    let disp = document.querySelector('#mybtn').style.visibility = "hidden";
    // conditions 
    switch (rUserGuess) {
        case rUserGuess = "Rock":
            if (rUserGuess == "Rock" && rComputerGuess == "Rock") {
                UserScore = UserScore + 0;
                let result = document.querySelector('#result').innerHTML = "[User -> Rock]  [Computer -> Rock]";
            }
            else if (rUserGuess == "Rock" && rComputerGuess == "Scissor") {
                UserScore += 1;
                let result = document.querySelector('#result').innerHTML = "[User -> Rock ] [Computer -> Scissors ]";

            }
            else if (rUserGuess == "Rock" && rComputerGuess == "Paper") {
                ComputerScore += 1;
                let result = document.querySelector('#result').innerHTML = "[User -> Rock] [Computer -> Paper]";
            }

        case rUserGuess = "Paper":
            if (rUserGuess == "Paper" && rComputerGuess == "Rock") {
                UserScore += 1;
                let result = document.querySelector('#result').innerHTML = "[User -> Paper] [Computer -> Paper]";
            }
            else if (rUserGuess == "Paper" && rComputerGuess == "Scissor") {
                ComputerScore += 1;
                let result = document.querySelector('#result').innerHTML = "[User -> Paper] [Computer -> Scissor]";
            }
            else if (rUserGuess == "Paper" && rComputerGuess == "Paper") {
                UserScore = UserScore + 0;
                let result = document.querySelector('#result').innerHTML = "[User -> Paper] [Computer -> Paper]";
            }

        case rUserGuess = "Scissor":
            if (rUserGuess == "Scissor" && rComputerGuess == "Rock") {
                ComputerScore += 1;
                let result = document.querySelector('#result').innerHTML = "[User -> Scissors] [Computer -> Rock]";
            }
            else if (rUserGuess == "Scissor" && rComputerGuess == "Scissor") {
                UserScore = UserScore + 0;
                let result = document.querySelector('#result').innerHTML = "[User -> Scissors] [Computer -> Scissor]";
            }
            else if (rUserGuess == "Scissor" && rComputerGuess == "Paper") {
                UserScore += 1;
                let result = document.querySelector('#result').innerHTML = "[User -> Scissors] [Computer -> Paper]";
            }
    }
    // console.log(rUserGuess, rComputerGuess);
    // console.log(`User -> ${UserScore} , Computer -> ${ComputerScore}`);


}
function ScoreUpdate() {
    ComputerScore = document.querySelector('#compSc').innerHTML = ComputerScore;
    // console.log(ComputerScore)
    UserScore = document.querySelector('#userSc').innerHTML = UserScore;
    // UserScore.document.querySelector('user-score');
}
function CheckWinner() {
    if (UserScore >= 5) {
        // console.log("User is Winner");
        let result = document.querySelector('#result').innerHTML = "";
        let winner = document.querySelector('#winner').innerHTML = "User is Winner";
        let disp = document.querySelector('#mybtn').style.visibility = "visible";
    }
    else if (ComputerScore >= 5) {
        // console.log("Computer is Winner");
        let result = document.querySelector('#result').innerHTML = "";
        let winner2 = document.querySelector('#winner').innerHTML = "Computer is Winner";
        let disp = document.querySelector('#mybtn').style.visibility = "visible";
    }
}

function AfterPlaying() {
    if (UserScore > 5 || ComputerScore > 5) {
        location.reload();
    }
}

// Play()

// Button Event Listners
let stone = document.querySelector('.stone');
stone.addEventListener('click', () => {
    rUserGuess = UserGuess[0];
    rComputerGuess = ComputerGuess[Math.floor(Math.random() * ComputerGuess.length)];
    Play();
    ScoreUpdate();
    CheckWinner();
    AfterPlaying();
    // alert("Hello");
})
let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    rUserGuess = UserGuess[1];
    rComputerGuess = ComputerGuess[Math.floor(Math.random() * ComputerGuess.length)];
    Play();
    ScoreUpdate();
    CheckWinner();
    AfterPlaying();
})
let scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
    rUserGuess = UserGuess[2];
    rComputerGuess = ComputerGuess[Math.floor(Math.random() * ComputerGuess.length)];
    Play();
    ScoreUpdate();
    CheckWinner();
    AfterPlaying();
    // alert('H');
})



// Logic To Hover 