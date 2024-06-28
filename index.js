// Dice 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "images/dice" + randomNum1 + ".png";

var imageSource1 = document.querySelectorAll("img")[0].setAttribute("src", diceImage1);

// Dice 2

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "images/dice" + randomNum2 + ".png";

var imageSource2 = document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

// Text changing

if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}

else if (randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩!";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}