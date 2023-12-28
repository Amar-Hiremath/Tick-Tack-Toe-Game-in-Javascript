// Access of Butttons
let boxes = document.querySelectorAll(".box"); //box
let resetBtn = document.querySelector(".resetbtn"); //reset button

//player's turn
let playerX = false;

//------------------------------
//winning patterns:/horizontal/vertical/digonal
let winingPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//-----------------------------
// functions
const showWinner = (winner) => {
  let p = document.querySelector(".winner");
  p.innerText = `Congratulations,${winner}`;
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const checkPattern = () => {
  for (let pattern of winingPatterns) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        let winner = ` winner is player ' ${position1} '`;
        showWinner(winner);
        return;
      }
    }
  }
};
//------------------------------------------
//Logic
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerX) {
      box.innerText = "O";
      playerX = false;
    } else {
      box.innerText = "X";
      playerX = true;
    }
    if (showWinner == true) {
      box.disabled = true;
    }
    box.disabled = true;
    checkPattern();
  });
});

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    let p = document.querySelector(".winner");
    p.innerText = "";
    box.innerText = "";
    box.disabled = false;
  });
});
