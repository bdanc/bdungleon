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
        `<div ondragstart="return false" class= "box box--${x}"></div>`
      );

      let box = containers.children[i].children[x];

      // assigns the correct class based off the mazeData array
      box.classList.add(`_${mazeData[i][x]}`);

      // event listeners for color changing
      box.addEventListener("mouseenter", () => {
        onHover(box);
      });
      box.addEventListener("mousedown", () => {
        onClick(box);
      });

      box.colorState = 0;
    }
  }
};

const clearAll = function () {
  containers.innerHTML = "";
};

let mouseDown = 0;
document.body.onmousedown = function () {
  ++mouseDown;
};
document.body.onmouseup = function () {
  --mouseDown;
};

const onHover = function (box) {
  if (mouseDown) {
    if (box.colorState === 0) {
      box.style.background = "#000";
      return box.colorState++;
    }
    if (box.colorState > 0) {
      box.style.background = "#1e471e";
      return (box.colorState = 0);
    }
  }
};

const onClick = function (box) {
  if (box.colorState === 0) {
    box.style.background = "#000";
    return box.colorState++;
  }
  if (box.colorState > 0) {
    box.style.background = "#1e471e";
    return (box.colorState = 0);
  }
};

// Waits for for Maze.M data from bdungly-buddy companion userscript and interprets maze from it
window.addEventListener("message", (event) => {
  clearAll();
  mazeMaker(event.data);
});
