
// CrystalCollector JavaScript
// variables needed to adjust wins, losses, and points guessed
// created variables for points, pointScore must be a number between 19-20
//pointGuessed variable must have a randome number between 1-12
//Random number shown once page is open 
$(document).ready(function(){
  var pointScore = Math.floor(Math.random()*101+19);
  $('#points-score').text(pointScore);

//4 crystals needs to have a random number 
//Declare variables for tallying score 
var black = Math.floor(Math.random()*11+1);
var blue = Math.floor(Math.random()*11+1);
var green = Math.floor(Math.random()*11+1);
var red = Math.floor(Math.random()*11+1);

var wins = 0;
var losses = 0; 
var pointsGuessed = 0;  

$('#wins').text(wins);
$('#lose').text(losses);

// Reset the game 
function reset(){
  pointScore = Math.floor(Math.random()*101+19);
  console.log(pointScore)
  $('#points-score').text(pointScore);
  black = Math.floor(Math.random()*11+1);
  blue = Math.floor(Math.random()*11+1);
  green = Math.floor(Math.random()*11+1);
  red = Math.floor(Math.random()*11+1);
  pointsGuessed = 0;
  $('#total-score').text(pointsGuessed);

}
// A new random number should be generated every single time user wins or losses 
// when clicking any Crystal, it should add with the previous total score
// until it equals the total score 
// if user incorrectly guesses, alert they lose and restart game 
// if user correctly guesses and adds up to the total, we increment a win counter 

function iWin(){
  alert("You won!");
  wins++;
  $('#wins').text(wins);
  reset();
}
function youLose(){
  alert("You lose!");
  losses++;
  $('#lose').text(losses);
  reset();
}

// On click function for every time you choose a crystal, it has generated a 
// Random number for the current game
// update the users total score 
$('#black').on('click', function(){
  pointsGuessed = pointsGuessed + black;
  console.log("New userTotal= " + pointsGuessed);
  $('#points-guessed').text(pointsGuessed);

  if (pointsGuessed == pointScore) {
    iWin();
  }
  else (pointsGuessed > pointScore);{
    youLose();
  }
})

$('#blue').on('click', function(){
  pointsGuessed = pointsGuessed + blue;
  console.log("New userTotal= " + pointsGuessed);
  $('#points-guessed').text(pointsGuessed);

  if (pointsGuessed == pointScore){
    iWin();
  }
  else (pointsGuessed > pointScore);{
    youLose();
  }
})
$('#green').on('click', function(){
  pointsGuessed = pointsGuessed + green;
  console.log("New userTotal= " + pointsGuessed);
  $('#points-guessed').text(pointsGuessed);

  if (pointsGuessed == pointScore){
    iWin();
  }
  else (pointsGuessed > pointScore);{
    youLose();
  }
})

$('#red').on('click', function(){
  pointsGuessed = pointsGuessed + red;
  console.log("New userTotal= " + pointsGuessed);
  $('#points-guessed').text(pointsGuessed);

  if (pointsGuessed == pointScore){
    iWin();
  }
  else (pointsGuessed > pointScore);{
    youLose();
  }
});
});
