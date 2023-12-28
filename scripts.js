// DEFAULT GRID SIZE
let canvas_height = 16;
let canvas_width = 16;

// Generate default canvas
const CANVAS = document.querySelector(".canvas")
renderCanvas(canvas_height, canvas_width)

// MENU BUTTONS
const inputCanvasHeight = document.querySelector("#input-canvas-height");
const inputCanvasWidth = document.querySelector("#input-canvas-width");

const buttonAdjustCanvas = document.querySelector("#button-adjust-canvas");
buttonAdjustCanvas.addEventListener("click", () => updateCanvasSize())


function renderCanvas(canvas_height, canvas_width) {
    for (let rowNum = 0; rowNum < canvas_height; rowNum++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let colNum = 0; colNum < canvas_width; colNum++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");

            gridSquare.addEventListener("mouseover", () => changeColor(gridSquare));
            row.appendChild(gridSquare);
        }
        CANVAS.appendChild(row);
    }
}

function updateCanvasSize() {
    while (CANVAS.firstChild) {
        CANVAS.removeChild(CANVAS.firstChild)
    }

    canvas_height = inputCanvasHeight.value;
    canvas_width = inputCanvasWidth.value;

    renderCanvas(canvas_height, canvas_width)
}

function changeColor(gridSquare) {
    gridSquare.style.backgroundColor = "grey";
}

