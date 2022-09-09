let mazeData;

const containers = document.body.querySelector(".boxes");

// Loops over the array of arrays to draw each tile
const mazeMaker = function (mazeData) {
  // Create a container for each array element
  mazeData.forEach((_, index) => {
    containers.insertAdjacentHTML(
      "beforeend",
      `<div class="container container--${index}"></div>`
    );
  });
  // Create a box for each element within each element of the array of arrays
  for (let i = 0; i < mazeData.length; i++) {
    for (let x = 0; x < mazeData[i].length; x++) {
      containers.children[i].insertAdjacentHTML(
        "beforeend",
        `<div class= "box box--${x}"</div>`
      );

      // give each box the correct class

      let box = containers.children[i].children[x];
      box.classList.add(`_${mazeData[i][x]}`);
    }
  }
};

const clearAll = function () {
  containers.innerHTML = "";
};

// Waits for for Maze.M data from bdungly-buddy companion userscript and interprets maze from it
window.addEventListener("message", (event) => {
  mazeMaker(event.data);
});
