// DEFAULT GRID SIZE
let GRID_HEIGHT = 16;
let GRID_WIDTH = 16;

// DEFINE GRID
const GRID = document.querySelector(".grid");

for (let rowNum = 0; rowNum < GRID_HEIGHT; rowNum++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let colNum = 0; colNum < GRID_WIDTH; colNum++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.textContent = `${rowNum},${colNum}`;
        
         
        gridSquare.addEventListener('mouseover', () => changeColor(gridSquare));
        row.appendChild(gridSquare);
    }
    GRID.appendChild(row); 
}

function changeColor(gridSquare) {
    gridSquare.style.backgroundColor = 'red';
}