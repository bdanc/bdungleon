let newMaze;
let current;

const randButton = document.body.querySelector(".btn---random");

class Maze {
  constructor(rows = 20, columns = 20) {
    this.size = 340;
    this.rows = rows;
    this.columns = columns;
    this.grid = [];
    this.stack = [];
  }
  setup() {
    for (let r = 0; r < this.rows; r++) {
      let row = [];
      for (let c = 0; c < this.columns; c++) {
        let cell = new Cell(r, c, this.grid, this.size);
        row.push(cell);
      }
      this.grid.push(row);
    }
    current = this.grid[0][0];
  }

  draw() {
    current.visited = true;

    let next = current.checkNeighbors();

    if (next) {
      next.visited = true;
      this.stack.push(current);
      current.removeWalls(current, next);

      current = next;
    } else if (this.stack.length > 0) {
      let cell = this.stack.pop();
      current = cell;
    }
    if (this.stack.length === 0) {
      return;
    }
    this.draw();
  }
}

class Cell {
  constructor(rowNum, colNum, parentGrid, parentSize) {
    this.rowNum = rowNum;
    this.colNum = colNum;
    this.parentGrid = parentGrid;
    this.parentSize = parentSize;
    this.visited = false;
    this.walls = {
      topWall: true,
      rightWall: true,
      bottomWall: true,
      leftWall: true,
    };
  }

  checkNeighbors() {
    let grid = this.parentGrid;
    let row = this.rowNum;
    let col = this.colNum;
    let neighbors = [];

    let top = row !== 0 ? grid[row - 1][col] : undefined;

    let right = col !== grid.length - 1 ? grid[row][col + 1] : undefined;

    let bottom = row !== grid.length - 1 ? grid[row + 1][col] : undefined;

    let left = row !== grid.length - 1 ? grid[row][col - 1] : undefined;

    if (top && !top.visited) neighbors.push(top);

    if (right && !right.visited) neighbors.push(right);

    if (bottom && !bottom.visited) neighbors.push(bottom);

    if (left && !left.visited) neighbors.push(left);

    if (neighbors.length !== 0) {
      let random = Math.floor(Math.random() * neighbors.length);
      return neighbors[random];
    } else {
      return undefined;
    }
  }

  removeWalls(cell1, cell2) {
    let x = cell1.colNum - cell2.colNum;

    if (x === 1) {
      cell1.walls.leftWall = false;
      cell2.walls.rightWall = false;
    } else if (x === -1) {
      cell1.walls.rightWall = false;
      cell2.walls.leftWall = false;
    }

    let y = cell1.rowNum - cell2.rowNum;

    if (y === 1) {
      cell1.walls.topWall = false;
      cell2.walls.bottomWall = false;
    } else if (y === -1) {
      cell1.walls.bottomWall = false;
      cell2.walls.topWall = false;
    }
  }
}

function mazeInit(rows, columns) {
  newMaze = new Maze(rows, columns);
  newMaze.setup();
  newMaze.draw();
}

function arrayMaker() {
  let mazeArr = [];
  newMaze.grid.forEach(() => mazeArr.push([]));
  for (e = 0; e < newMaze.grid.length; e++) {
    for (i = 0; i < newMaze.grid[e].length; i++) {
      //   1
      if (
        newMaze.grid[e][i].walls.topWall === true &&
        newMaze.grid[e][i].walls.rightWall === false &&
        newMaze.grid[e][i].walls.bottomWall === false &&
        newMaze.grid[e][i].walls.leftWall === false
      )
        mazeArr[i].push(1);
      //   2
      if (
        newMaze.grid[e][i].walls.topWall === false &&
        newMaze.grid[e][i].walls.rightWall === true &&
        newMaze.grid[e][i].walls.bottomWall === false &&
        newMaze.grid[e][i].walls.leftWall === false
      )
        mazeArr[i].push(2);
      //   3
      if (
        newMaze.grid[e][i].walls.topWall === true &&
        newMaze.grid[e][i].walls.rightWall === true &&
        newMaze.grid[e][i].walls.bottomWall === false &&
        newMaze.grid[e][i].walls.leftWall === false
      )
        mazeArr[i].push(3);
      //   4
      if (
        newMaze.grid[e][i].walls.topWall === false &&
        newMaze.grid[e][i].walls.rightWall === false &&
        newMaze.grid[e][i].walls.bottomWall === true &&
        newMaze.grid[e][i].walls.leftWall === false
      )
        mazeArr[i].push(4);
      //   5
      if (
        newMaze.grid[e][i].walls.topWall === true &&
        newMaze.grid[e][i].walls.rightWall === false &&
        newMaze.grid[e][i].walls.bottomWall === true &&
        newMaze.grid[e][i].walls.leftWall === false
      )
        mazeArr[i].push(5);
      //   6
      if (
        newMaze.grid[e][i].walls.topWall === false &&
        newMaze.grid[e][i].walls.rightWall === true &&
        newMaze.grid[e][i].walls.bottomWall === true &&
        newMaze.grid[e][i].walls.leftWall === false
      )
        mazeArr[i].push(6);
      //   7
      if (
        newMaze.grid[e][i].walls.topWall === true &&
        newMaze.grid[e][i].walls.rightWall === true &&
        newMaze.grid[e][i].walls.bottomWall === true &&
        newMaze.grid[e][i].walls.leftWall === false
      )
        mazeArr[i].push(7);
      //   8
      if (
        newMaze.grid[e][i].walls.topWall === false &&
        newMaze.grid[e][i].walls.rightWall === false &&
        newMaze.grid[e][i].walls.bottomWall === false &&
        newMaze.grid[e][i].walls.leftWall === true
      )
        mazeArr[i].push(8);
      //   9
      if (
        newMaze.grid[e][i].walls.topWall === true &&
        newMaze.grid[e][i].walls.rightWall === false &&
        newMaze.grid[e][i].walls.bottomWall === false &&
        newMaze.grid[e][i].walls.leftWall === true
      )
        mazeArr[i].push(9);
      //   10
      if (
        newMaze.grid[e][i].walls.topWall === false &&
        newMaze.grid[e][i].walls.rightWall === true &&
        newMaze.grid[e][i].walls.bottomWall === false &&
        newMaze.grid[e][i].walls.leftWall === true
      )
        mazeArr[i].push(10);
      //   11
      if (
        newMaze.grid[e][i].walls.topWall === true &&
        newMaze.grid[e][i].walls.rightWall === true &&
        newMaze.grid[e][i].walls.bottomWall === false &&
        newMaze.grid[e][i].walls.leftWall === true
      )
        mazeArr[i].push(11);
      //   12
      if (
        newMaze.grid[e][i].walls.topWall === false &&
        newMaze.grid[e][i].walls.rightWall === false &&
        newMaze.grid[e][i].walls.bottomWall === true &&
        newMaze.grid[e][i].walls.leftWall === true
      )
        mazeArr[i].push(12);
      //   13
      if (
        newMaze.grid[e][i].walls.topWall === true &&
        newMaze.grid[e][i].walls.rightWall === false &&
        newMaze.grid[e][i].walls.bottomWall === true &&
        newMaze.grid[e][i].walls.leftWall === true
      )
        mazeArr[i].push(13);
      //   14
      if (
        newMaze.grid[e][i].walls.topWall === false &&
        newMaze.grid[e][i].walls.rightWall === true &&
        newMaze.grid[e][i].walls.bottomWall === true &&
        newMaze.grid[e][i].walls.leftWall === true
      )
        mazeArr[i].push(14);
      //   0
      if (
        newMaze.grid[e][i].walls.topWall === false &&
        newMaze.grid[e][i].walls.rightWall === false &&
        newMaze.grid[e][i].walls.bottomWall === false &&
        newMaze.grid[e][i].walls.leftWall === false
      )
        mazeArr[i].push(0);
    }
  }

  // console.log(newMaze);
  // console.log(mazeArr);
  return mazeArr;
}

randButton.addEventListener("click", () => {
  clearAll();
  mazeInit();
  let mazeGen = arrayMaker();
  mazeMaker(mazeGen);
});
