const DEFAULT_SIZE = 16;

const grid = document.getElementById("grid");
const colorButton = document.getElementById("color"); 
const sizeButton = document.getElementById("size"); 
const eraseButton = document.getElementById("erase"); 

eraseButton.addEventListener("click", () => {
    eraseGrid();
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
            div.style.backgroundColor = "#000000";
        });
    }
}

// Erase grid 
function eraseGrid() { 
    const square = document.querySelectorAll(".square"); 
    square.forEach(square => square.style.backgroundColor = "#d4d4d4"); 
}

// Once DOM is loaded, create grid 
document.addEventListener("DOMContentLoaded", function () {
   createGrid(DEFAULT_SIZE); 
});

