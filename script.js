
let colorMode = 1; 
let colorChoice = "#000000"
const DEFAULT_SIZE = 16;
const grid = document.getElementById("grid");
const colorButton = document.getElementById("color"); 
const sizeButton = document.getElementById("size"); 
const eraseButton = document.getElementById("erase"); 

eraseButton.addEventListener("click", () => {
    eraseGrid();
}); 

colorButton.addEventListener("click", () => {
    changeColorMode();
}); 


// Create grid 
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        grid.appendChild(div); 
        div.classList.add("square");

        // Change the color to black when mouse goes over square
        div.addEventListener("mouseover", function trace(e) {
            if(colorMode === 1) { 
            div.style.backgroundColor = "#000000";
            } else if(colorMode === 2) {
                div.style.backgroundColor = getRandomColor();
            }
        });
    }
}

// Erase grid 
function eraseGrid() { 
    const square = document.querySelectorAll(".square"); 
    square.forEach(square => square.style.backgroundColor = "#d4d4d4"); 
}

// Switch between black and colorful choice 
function changeColorMode() { 
    if (colorMode == 1) { 
        colorMode = 2; 
        return; 
    } else if (colorMode == 2) {
        colorMode = 1; 
        return;
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


// Once DOM is loaded, create grid 
document.addEventListener("DOMContentLoaded", function () {
   createGrid(DEFAULT_SIZE); 
});

