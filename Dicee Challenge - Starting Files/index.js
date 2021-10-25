function createRand(x) // NOTE: between 1 to X
{
var num = Math.floor(Math.random()*x)+1;
var randomDiceNumber= "images/dice"+num+".png";
return randomDiceNumber
}

// randmoize the dice
var x = 6 // NOTE: random between 1-6
var randomSource1 =createRand(x);
var randomSource2 =createRand(x);

// fetch if button was clicked
document.getElementById("button1").onclick= function(){
  setNewImage(0,randomSource1)
}

function setNewImage(num, randomSource)
{
//setting the dice into the image tag
  var image = document.querySelectorAll("img")[num];
  image.setAttribute("src",randomSource);
}
// var image2 = document.querySelectorAll("img")["1"];
// image2.setAttribute("src",randomSource2);


//check's who is the winner
if (randomSource1 > randomSource2){
  document.querySelector("h1").innerHTML = "Player 1 Wins 👏";
}

else if (randomSource1 < randomSource2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 👏";
}

else {
  document.querySelector("h1").innerHTML = "Its A Draw!";
}
