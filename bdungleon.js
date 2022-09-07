let mazeData;

const containers = document.body.querySelector(".boxes");
const btnInput = document.body.querySelector(".btn");
const textField = document.body.querySelector(".resizedTextbox");

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

const sendMaze = function () {
  if (textField.value[0][0] < 0 || textField.value[0][0] > 14)
    return (textField.value = "Something is wrong please confirm your paste!");
  clearAll();
  mazeString = textField.value;
  mazeData = JSON.parse(mazeString);
  console.log(mazeData);
  mazeMaker(mazeData);
  init();
};

const init = function () {
  textField.value = "Paste Maze Data Here!";
};

const clearAll = function () {
  containers.innerHTML = "";
};

init();

btnInput.addEventListener("click", async function () {
  if (navigator.userAgent.indexOf("Firefox") > -1) {
    return sendMaze();
  }
  clearAll();
  const text = await navigator.clipboard.readText();
  mazeMaker(JSON.parse(text));
});
textField.addEventListener("click", function () {
  const isActive = document.activeElement;
  if (isActive === textField) {
    textField.value = "";
  }
});

window.addEventListener("message", (event) => {
  mazeMaker(event.data);
});
