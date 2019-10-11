//window.onload = startGame();

function startGame() {
  var grid = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  var grid_X = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  var grid_0 = [
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
