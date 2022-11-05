const boxes = document.querySelectorAll('.box');
const options = [];

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', userTurn);
  options.push((i + 1).toString());
}

function checkWin() {
  const bOne = document.getElementById("1").innerText;
  const bTwo = document.getElementById("2").innerText;
  const bThree = document.getElementById("3").innerText;
  const bFour = document.getElementById("4").innerText;
  const bFive = document.getElementById("5").innerText;
  const bSix = document.getElementById("6").innerText;
  const bSeven = document.getElementById("7").innerText;
  const bEight = document.getElementById("8").innerText;
  const bNine = document.getElementById("9").innerText;

  if ((bOne === "X" && bTwo === "X" && bThree === "X") || (bOne === "X" && bFour === "X" && bSeven === "X") || (bOne === "X" && bFive === "X" && bNine === "X") ||
        (bTwo === "X" && bFive === "X" && bEight === "X") || (bThree === "X" && bSix === "X" && bNine === "X") || (bThree === "X" && bFive === "X" && bSeven === "X") ||
          (bFour === "X" && bFive === "X" && bSix === "X") || (bSeven === "X" && bEight === "X" && bNine === "X")) {
    let playerWin = document.createTextNode('You Win!');
    document.getElementById("status").appendChild(playerWin);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', userTurn);
      }
  } else if ( (bOne === "O" && bTwo === "O" && bThree === "O") || (bOne === "O" && bFour === "O" && bSeven === "O") || (bOne === "O" && bFive === "O" && bNine === "O") ||
        (bTwo === "O" && bFive === "O" && bEight === "O") || (bThree === "O" && bSix === "O" && bNine === "O") || (bThree === "O" && bFive === "O" && bSeven === "O") ||
        (bFour === "O" && bFive === "O" && bSix === "O") || (bSeven === "O" && bEight === "O" && bNine === "O") ) {
      let computerWin = document.createTextNode('Computer Wins!');
      document.getElementById("status").appendChild(computerWin);
      for (let i = 0; i < boxes.length; i++) {
      boxes[i].removeEventListener('click', userTurn);
    }
  } else if (options.length < 1) {
    let noWin = document.createTextNode('Draw! Game Over.');
    document.getElementById("status").appendChild(noWin);
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].removeEventListener('click', userTurn);
    }
  } else {
    return "game on";
  }
}

function userTurn(event) {
  let boxId = event.target.id;
  let thisBox = document.getElementById(boxId);
  let newX = document.createTextNode('X');
  thisBox.appendChild(newX);
  thisBox.removeEventListener('click', userTurn);
  options.splice(options.indexOf(boxId), 1);
  let proceed = checkWin();
  if (proceed === "game on") {setTimeout(computerTurn, 400)} else {console.log("game end");};
}

function computerTurn() {
  let computerPick = Math.floor(Math.random() * options.length);
  let computerId = options[computerPick];
  let computerBox = document.getElementById(computerId);
  let newO = document.createTextNode('O');
  computerBox.appendChild(newO);
  computerBox.removeEventListener('click', userTurn);
  options.splice(options.indexOf(computerId), 1);
  checkWin();
}
