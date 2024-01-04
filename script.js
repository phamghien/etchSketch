const colorButton = document.querySelector(".color"); 
const sizeButton = document.querySelector(".size"); 
const eraseButton = document.querySelector(".erase"); 

eraseButton.addEventListener("click", function(){
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = '#d4d4d4';
    }
}); 

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
    };

sizeButton.addEventListener("click", changeSize); 
colorButton.addEventListener("click", changeColor); 


