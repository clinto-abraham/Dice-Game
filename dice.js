
var randomNo1 = Math.floor(Math.random() * 6) + 1;
var finalImage = "images/" + "dice" + randomNo1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", finalImage);

var randomNo2 = Math.floor(Math.random() * 6) + 1;
var finalImage2 = "images/" + "dice" + randomNo2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", finalImage2);

var name1 = prompt("What is the Player 1 name?");
document.getElementById("nameOfPlayer1").innerHTML = name1;
var name2 = prompt("What is the Player 2 name?");
document.getElementById("nameOfPlayer2").innerHTML = name2;

if (randomNo1 > randomNo2) {
  document.getElementsByTagName("h1")[0].innerHTML = "🏁 Player " + name1 + " 😆 Wins";
} else if (randomNo1 < randomNo2) {
  document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player " + name2 + " 😂Wins";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "🏳️ DRAW";
}
