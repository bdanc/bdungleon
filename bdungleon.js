let Maze;

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
