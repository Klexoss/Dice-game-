var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSource2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);

//Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
//Hint: You'll need to use an if statement, querySelector() and the innerHTML property to change the text in the h1.


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Won";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Won";
} else{
  document.querySelector("h1").innerHTML = "Draw!!";
}