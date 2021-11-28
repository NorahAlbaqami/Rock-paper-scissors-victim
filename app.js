$(document).ready(function () {
  function animate() {
    $(".pic").animate({ width: '150px' }, "fast", function () {
      $(this).animate({ width: '100px' }, "fast");
      window.setTimeout(function () { animate() }, 50)
    })
  }
  animate()
} ,
);

//music ///////////////////////////////////////////////////////
let song = document.getElementById('music');
function playmusic() {
  song.play();
}
function stopmusic() {
  song.pause();
}
//game////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
let computerScore = 0;
let yourScore = 0;

////////////////////////////////////////////////////////////////////////
const result = document.getElementsByClassName("result")[0];
///////////////////////////////////////////////////////////////////
const yourChoiseRock = document.getElementById("rock");
const yourChoisePaper = document.getElementById("paper");
const yourChoiseScissor = document.getElementById("scissor");
///////////////////////////////////////////////////////////////////////
// const yourHands = document.getElementsByClassName("hyuk-hand");
// const computerHands = document.getElementsByClassName("comp-hand");
let yourChoise;

//////////////////////////////////////////////////
function game() {

  let yourScoreDisplay = document.getElementById("you");
  // console.log(yourScoreDisplay);
  let computerScoreDisplay = document.getElementById("computer");
  // console.log(computerScoreDisplay);


  yourChoiseRock.addEventListener("click", function () {

    yourChoise = 'rock';
    if (computeroptions() == 'paper') {
      result.textContent = 'computer win';
      computerScore++;
    } else if (computeroptions() == 'rock') {
      result.textContent = 'Tie';
    } else {
      result.textContent = 'You win';
      yourScore++;
    }
    computerScoreDisplay.textContent = computerScore;
    yourScoreDisplay.textContent = yourScore;
    // console.log(yourScore);
    // console.log(computerScore);

  })

  yourChoisePaper.addEventListener("click", function () {

    yourChoise = 'paper';
    if (computeroptions() == 'paper') {
      result.textContent = 'Tie';

    } else if (computeroptions() == 'rock') {
      result.textContent = 'You win';
      yourScore++;
    } else {
      result.textContent = 'computer win';
      computerScore++;
    }
    computerScoreDisplay.textContent = computerScore;
    yourScoreDisplay.textContent = yourScore;
    // console.log(yourScore);
    // console.log(computerScore);

  })
  yourChoiseScissor.addEventListener("click", function () {
    yourChoise = 'scissor';
    if (computeroptions() == 'paper') {
      result.textContent = 'You win';
      yourScore++;
    } else if (computeroptions() == 'rock') {
      result.textContent = 'Computer win';
      computerScore++;
    } else {
      result.textContent = 'Tie';

    }
    computerScoreDisplay.textContent = computerScore;
    yourScoreDisplay.textContent = yourScore;
    // console.log(yourScore);
    // console.log(computerScore);

  })


  // computer /////////////////////////////////////////////////////////////
  function computeroptions() {
    const compChoise = ['rock', 'paper', 'scissor'];
    const compChoiseRandom = Math.floor(Math.random() * 3);
    return compChoise[compChoiseRandom];
  }
  // console.log(computeroptions());



}
game();


