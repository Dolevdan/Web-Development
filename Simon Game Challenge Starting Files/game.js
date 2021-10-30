var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0 ;
var started = false;

$(document).keypress(function() {
  if (!started) {
    //changing h1 text
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});



function checkAnswer(currentLevel){

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");

    if (userClickedPattern.length === gamePattern.length ){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
}
  else{
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
    $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key To Restart");
    startOver()
  }
}

// Randomize sequence
function nextSequence(){

  userClickedPattern = []
  level++;
  $("#level-title").text( "Level " + level);


  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

function startOver(){
  level = 0;
  gamePattern = []
  started = false;
}


// Play sound by specific color
function playSound(name){
  var audio = new Audio("sounds/" + name +".mp3");
  audio.play();
}

//Add animation when user click the button
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}
