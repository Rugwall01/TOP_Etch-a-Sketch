
const body = document.querySelector("body");
const container = document.querySelector("#div-container");

const userInput = document.getElementsByName("user-input")[0];
const generate = document.querySelector("#szBtn");
const label = document.querySelector("label");

const colorLabel = document.querySelector("#colorLabel");
let colorInput = document.querySelector("#chooseColor");
const darkenLabel = document.querySelector("#darkenLabel");
const darkenInput = document.querySelector("#chooseFade");
const eraseLabel = document.querySelector("#eraseLabel");
const eraseInput = document.querySelector("#erase");



function createElementsWithClass(n1, n2, className1, className2) {
    for(let i = 0; i < n1; i++){
        const elementY = document.createElement('div');
        elementY.classList.add(className1 +  `${(i + 1)}`);
        
        for(let j = 0; j < n2; j++){
            const elementX = document.createElement('div');

            elementX.classList.add(className2);

            elementY.appendChild(elementX);
        }
        container.appendChild(elementY);
    }
}
function removeDivElementsByClass() {
    
    let  elementsY = document.querySelectorAll(`[class^="grid-y"]`);

    elementsY.forEach(element => element.remove());

}

function clearGrid() {
    removeDivElementsByClass();

}

function generateRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 16).toString(16);
    }

    colorInput.value = color;
    return;
  }
  
 

document.addEventListener('DOMContentLoaded', () => {
    generateRandomColor();
    createElementsWithClass(2, 2, 'grid-y', 'grid-x');
    
    alert("Enter a number between 1 and 100 in the field above the box");
    return;
})

function generateGrid() {
    if(userInput.value){
        if(isNaN(userInput.value)){
            userInput.value = '';
            alert("Enter a valid number");
        }else{
            let input = Number(userInput.value);
            if(input < 1 || input > 100) {
                alert("Enter a number between 1 and 100");
            }else{
                createElementsWithClass(Number(input), Number(input), 'grid-y', 'grid-x');

            }
        } 
    }
}

generate.addEventListener('click', () => {
    clearGrid();
    generateGrid();

})

const divs = document.querySelectorAll('[class^="grid-x"]');

let mouseDown = false 

container.addEventListener('mousedown', () => {
        mouseDown = true
    })

window.addEventListener('mouseup', () => {
        mouseDown = false
        
    })

container.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('grid-x') && e.target.dataset.isPainted !== "true"){
    
        e.target.style.backgroundColor = colorInput.value;
        e.target.dataset.isPainted = "true";
    }
    if(darkenInput.checked) {
        if(e.target.classList.contains('grid-x') && e.target.dataset.isPainted !== "true"){
            e.target.style.backgroundColor = colorInput.value;
            e.target.style.opacity = "0.1";
            e.target.dataset.isPainted = "true";
        }
        if(e.target.classList.contains('grid-x') && e.target.dataset.isPainted === "true") {
            if(Number(e.target.style.opacity) < 1.0){
                e.target.style.opacity = String((Number(e.target.style.opacity) + 0.1));  
            }
        }
    }
    if(eraseInput.checked && e.target.classList.contains('grid-x')) {
        e.target.style.backgroundColor = "";
        e.target.style.opacity = "1";
        e.target.dataset.isPainted = "false";
    }
})  
    
    container.addEventListener('mouseover', (e) => {
        if (!mouseDown && e.target.classList.contains('grid-x') && e.target.dataset.isPainted !== "true") {
            e.target.style.backgroundColor = "lightblue";
        } else if (mouseDown && e.target.classList.contains('grid-x')) {
            e.target.style.backgroundColor = colorInput.value;
            e.target.dataset.isPainted = "true";
        }
        if(darkenInput.checked) {
            if (!mouseDown && e.target.classList.contains('grid-x') && e.target.dataset.isPainted !== "true") {
                e.target.style.backgroundColor = "lightblue";
            } else if (mouseDown && e.target.classList.contains('grid-x') && e.target.dataset.isPainted !== "true") {
                e.target.style.backgroundColor = colorInput.value;
                e.target.style.opacity = "0.1";
                e.target.dataset.isPainted = "true";
            }
            if(e.target.classList.contains('grid-x') && e.target.dataset.isPainted === "true" && mouseDown) {
                if(Number(e.target.style.opacity) < 1.0){
                    e.target.style.opacity = String((Number(e.target.style.opacity) + 0.1));  
                }
                
            }
        }
        if(eraseInput.checked && e.target.classList.contains('grid-x') && mouseDown) {
            e.target.style.backgroundColor = "";
            e.target.style.opacity = "1";
            e.target.dataset.isPainted = "false";
        }
    });

    container.addEventListener('mouseout', (e) => {
        if(e.target.classList.contains('grid-x') && !mouseDown && e.target.dataset.isPainted !== "true"){
                e.target.style.backgroundColor = "";
        }
    })


    






   

    
   

