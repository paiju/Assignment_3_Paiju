//window.onload = startGame();
document.getElementById("startButton").onclick = startGame();

function startGame() {
  var board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  var board_X = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  var board_0 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  // var test = document.getElementById("box0");
  //test.textContent = "X";

  const cells = document.querySelectorAll(".cell");

  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(box) {
  //  box.textContent = "X";
  document.getElementById(box.target.id).textContent = "X";
}
