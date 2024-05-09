// Size of the game grid
  const gridSize = 4;
  // Size of each cell in pixels
  const cellSize = 100;
  // Padding between cells
  const padding = 10;

  // Game grid
  let grid;
  let bg;
  let lost = false;
  let move;

  function setup() {
    let canvas = createCanvas(gridSize * (cellSize + padding) + padding, gridSize * (cellSize + padding) + padding);
    canvas.id("gameboard")
    textFont("Comic Neue")
    noLoop();

    // Initialize the grid with empty cells
    grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));

    // Add two initial tiles
    addTile();
    addTile();

    // Display the grid
    drawGrid();
  }

  function preload(){
      let josh = loadImage('assets/josh.png');
      move = loadSound('assets/hit.wav');
      lose = loadSound('assets/lose.wav');
      bg = loadSound('assets/bg.wav');
      bg.setVolume(0.7)
  }

  // Add a new tile to the grid
  function addTile() {
    const availableCells = [];

    // Find all empty cells
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (grid[row][col] === 0) {
          availableCells.push({ row, col });
        }
      }
    }

    // Randomly select an empty cell
    if (availableCells.length > 0) {
      const { row, col } = random(availableCells);
      const newValue = random() < 0.9 ? 2 : 4;
      grid[row][col] = newValue;
    }
  }

  function sumMembers(){
    let total = 0;
    for (let row=0; row<gridSize; row++){
      for (let col=0; col<gridSize; col++){
        total += grid[row][col];
      }
    }
    return total
  }

  // Display the game grid
  function drawGrid() {
    background(255);
    textSize(32);
    textAlign(CENTER, CENTER);

    // Draw cells
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const x = padding + col * (cellSize + padding);
        const y = padding + row * (cellSize + padding);
        const value = grid[row][col];

        // Draw cell background
        fill(getColor(value));
        rect(x, y, cellSize, cellSize, 10);

        // Draw cell value
        if (value !== 0) {
          fill(0);
          text(value, x + cellSize / 2, y + cellSize / 2);
        }
      }
    }
  }

  function updateMembers(num){
    $("#numMembers").text(`Current Members: ${num}`);
  }

  // Get color based on cell value
  function getColor(value) {
    switch (value) {
      case 2: return "#eee4da";
      case 4: return "#ede0c8";
      case 8: return "#f2b179";
      case 16: return "#f59563";
      case 32: return "#f67c5f";
      case 64: return "#f65e3b";
      case 128: return "#edcf72";
      case 256: return "#edcc61";
      case 512: return "#edc850";
      case 1024: return "#edc53f";
      case 2048: return "#edc22e";
      default: return "#ccc0b3";
    }
  }

  // Handle key press events
  function keyPressed() {
    let moved = false;

    // Move tiles based on the key pressed
    if (keyCode === UP_ARROW) {
      moved = moveTilesUp();
    } else if (keyCode === DOWN_ARROW) {
      moved = moveTilesDown();
    } else if (keyCode === LEFT_ARROW) {
      moved = moveTilesLeft();
    } else if (keyCode === RIGHT_ARROW) {
      moved = moveTilesRight();
    }

    if (moved) {
      addTile(); // Add a new tile if any tile moved
      drawGrid(); // Update the grid
      move.play();
    }

    if (!bg.isPlaying() && !lost){
        bg.loop();
    }

    updateMembers(sumMembers());
  }

  // Move tiles up
  function moveTilesUp() {
    let moved = false;

    // Move each column separately
    for (let col = 0; col < gridSize; col++) {
      for (let row = 1; row < gridSize; row++) {
        if (grid[row][col] !== 0) {
          let currentRow = row;

          // Move the tile as far as possible
          while (currentRow > 0 && grid[currentRow - 1][col] === 0) {
            grid[currentRow - 1][col] = grid[currentRow][col];
            grid[currentRow][col] = 0;
            currentRow--;
            moved = true;
          }

          // Merge tiles if they have the same value
          if (currentRow > 0 && grid[currentRow - 1][col] === grid[currentRow][col]) {
            grid[currentRow - 1][col] *= 2;
            grid[currentRow][col] = 0;
            moved = true;
          }
        }
      }
    }

    return moved;
  }

  // Move tiles down
  function moveTilesDown() {
    let moved = false;

    // Move each column separately
    for (let col = 0; col < gridSize; col++) {
      for (let row = gridSize - 2; row >= 0; row--) {
        if (grid[row][col] !== 0) {
          let currentRow = row;

          // Move the tile as far as possible
          while (currentRow < gridSize - 1 && grid[currentRow + 1][col] === 0) {
            grid[currentRow + 1][col] = grid[currentRow][col];
            grid[currentRow][col] = 0;
            currentRow++;
            moved = true;
          }

          // Merge tiles if they have the same value
          if (currentRow < gridSize - 1 && grid[currentRow + 1][col] === grid[currentRow][col]) {
            grid[currentRow + 1][col] *= 2;
            grid[currentRow][col] = 0;
            moved = true;
          }
        }
      }
    }

    return moved;
  }

  // Move tiles left
  function moveTilesLeft() {
    let moved = false;

    // Move each row separately
    for (let row = 0; row < gridSize; row++) {
      for (let col = 1; col < gridSize; col++) {
        if (grid[row][col] !== 0) {
          let currentCol = col;

          // Move the tile as far as possible
          while (currentCol > 0 && grid[row][currentCol - 1] === 0) {
            grid[row][currentCol - 1] = grid[row][currentCol];
            grid[row][currentCol] = 0;
            currentCol--;
            moved = true;
          }

          // Merge tiles if they have the same value
          if (currentCol > 0 && grid[row][currentCol - 1] === grid[row][currentCol]) {
            grid[row][currentCol - 1] *= 2;
            grid[row][currentCol] = 0;
            moved = true;
          }
        }
      }
    }

    return moved;
  }

  // Move tiles right
  function moveTilesRight() {
    let moved = false;

    // Move each row separately
    for (let row = 0; row < gridSize; row++) {
      for (let col = gridSize - 2; col >= 0; col--) {
        if (grid[row][col] !== 0) {
          let currentCol = col;

          // Move the tile as far as possible
          while (currentCol < gridSize - 1 && grid[row][currentCol + 1] === 0) {
            grid[row][currentCol + 1] = grid[row][currentCol];
            grid[row][currentCol] = 0;
            currentCol++;
            moved = true;
          }

          // Merge tiles if they have the same value
          if (currentCol < gridSize - 1 && grid[row][currentCol + 1] === grid[row][currentCol]) {
            grid[row][currentCol + 1] *= 2;
            grid[row][currentCol] = 0;
            moved = true;
          }
        }
      }
    }

    return moved;
  }