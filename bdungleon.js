let Maze = [
  [9, 12, 9, 12, 9, 10, 10, 8, 12, 9, 12, 11, 8, 12, 9, 10, 10, 12, 13],
  [5, 7, 5, 1, 0, 8, 8, 4, 5, 5, 3, 10, 6, 5, 5, 13, 9, 0, 4],
  [1, 10, 6, 1, 0, 0, 0, 6, 3, 6, 9, 8, 8, 0, 0, 0, 0, 0, 4],
  [3, 10, 12, 1, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 6, 5],
  [9, 12, 7, 1, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 6, 13, 5],
  [5, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 6, 5],
  [5, 3, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4],
  [5, 9, 6, 3, 2, 4, 3, 2, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [5, 3, 10, 10, 14, 3, 12, 9, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [5, 9, 10, 10, 8, 14, 5, 3, 10, 12, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [5, 1, 10, 14, 3, 10, 2, 10, 10, 6, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [1, 0, 8, 8, 8, 10, 12, 9, 10, 10, 4, 1, 0, 0, 0, 0, 0, 0, 4],
  [1, 0, 0, 0, 0, 12, 3, 6, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [1, 0, 0, 0, 0, 2, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 6],
  [1, 0, 0, 0, 0, 10, 8, 12, 1, 0, 0, 0, 0, 0, 0, 0, 4, 5, 13],
  [1, 0, 0, 0, 0, 14, 5, 5, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 6],
  [1, 0, 0, 0, 0, 8, 6, 7, 1, 6, 3, 4, 3, 10, 0, 0, 10, 10, 12],
  [3, 4, 1, 2, 4, 3, 10, 12, 3, 10, 12, 1, 12, 13, 3, 4, 9, 8, 4],
  [13, 3, 6, 13, 3, 12, 13, 3, 8, 12, 5, 5, 3, 4, 13, 5, 3, 0, 4],
  [1, 10, 8, 2, 14, 1, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 4],
  [5, 11, 4, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [1, 12, 7, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4],
  [5, 3, 10, 6, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 4],
  [3, 12, 11, 8, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 1, 4],
  [13, 3, 10, 6, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5],
  [1, 8, 12, 9, 6, 1, 2, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 10, 6],
  [5, 5, 3, 6, 9, 6, 11, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12],
  [5, 3, 12, 9, 6, 9, 10, 6, 1, 0, 0, 0, 0, 0, 0, 0, 2, 10, 4],
  [3, 14, 3, 2, 10, 6, 11, 10, 2, 2, 2, 2, 2, 2, 2, 2, 10, 10, 6],
];

const containers = document.body.querySelector(".boxes");
const btnInput = document.body.querySelector(".btn");
const textField = document.body.querySelector(".resizedTextbox");

const mazeMaker = function () {
  // Create a container for each array element
  Maze.forEach((_, index) => {
    containers.insertAdjacentHTML(
      "beforeend",
      `<div class="container container--${index}"></div>`
    );
  });
  // Create a box for each element within each element of the array of arrays
  for (let i = 0; i < Maze.length; i++) {
    for (let x = 0; x < Maze[i].length; x++) {
      containers.children[i].insertAdjacentHTML(
        "beforeend",
        `<div class= "box box--${x}"</div>`
      );

      // give each box the correct class

      let box = containers.children[i].children[x];
      box.classList.add(`_${Maze[i][x]}`);
    }
  }
};

const sendMaze = function () {
  if (textField.value[0][0] < 0 || textField.value[0][0] > 14)
    return (textField.value = "Something is wrong please confirm your paste!");
  clearAll();
  mazeString = textField.value;
  Maze = JSON.parse(mazeString);
  console.log(Maze);
  mazeMaker();
  init();
};

const init = function () {
  textField.value = "Paste Maze Data Here!";
};

const clearAll = function () {
  containers.innerHTML = "";
};

init();

btnInput.addEventListener("click", sendMaze);
textField.addEventListener("click", function () {
  const isActive = document.activeElement;
  if (isActive === textField) {
    textField.value = "";
  }
});
