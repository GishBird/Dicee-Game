

let randomNumber1 = Math.floor(Math.random() * 6) +1;
let randomNumber2 = Math.floor(Math.random() * 6) +1;

const firstRoll = (dice) => {

  if (dice === 1) {
    return "images/dice1.png";
  }
  else if (dice === 2) {
    return "images/dice2.png";
  }
  else if (dice === 3) {
    return "images/dice3.png";
  }
  else if (dice === 4) {
    return "images/dice4.png";
  }
  else if (dice === 5) {
    return "images/dice5.png";
  }
  else if (dice === 6) {
    return "images/dice6.png";
  } else {
    console.log("Invalid Role");
  }
};

var diceOne = firstRoll(randomNumber1);
document.querySelector(".img1").setAttribute("src", diceOne);

var diceTwo = firstRoll(randomNumber2);
document.querySelector(".img2").setAttribute("src", diceTwo);

const chooseWinner = (player1, player2) => {
  if (player1 === player2) {
    return "DRAW!"
  } else if (player1 > player2) {
    return "🚩Player 1 Wins!"
  }else {
    return "🚩Player 2 Wins!"
  }
}
const finalWinner = chooseWinner(randomNumber1, randomNumber2);


document.querySelector("h1").innerHTML = finalWinner;
