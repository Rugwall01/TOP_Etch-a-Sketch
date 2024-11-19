
const body = document.querySelector("body");
const container = document.querySelector("#div-container");

const userInput = document.getElementsByName("user-input")[0];
const generate = document.querySelector("#szBtn");
const label = document.querySelector("label");




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

document.addEventListener('DOMContentLoaded', () => {
    alert("Enter a number between 1 and 100 in the field above the box");
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

generate.addEventListener('Click', () => {
    generateGrid();

})
    
    


const divs = document.querySelectorAll('[class^="grid-x"]');

let mouseDown = false 

container.addEventListener('mousedown', () => {
        mouseDown = true
    })

container.addEventListener('mouseup', () => {
        mouseDown = false
    })

divs.forEach(div => {
    
    div.addEventListener('mouseover', (e) => {
        if(!mouseDown && e.target.style.backgroundColor !== "black"){
            const target = e.target
            target.style.backgroundColor = "lightblue";
        }
    })

    div.addEventListener('mouseout', (e) => {
        if(!mouseDown && e.target.style.backgroundColor !== "black"){
            const target = e.target
            target.style.backgroundColor = "";
        }
    })

    div.addEventListener('mousedown', (e) => {
        const target = e.target
        target.style.backgroundColor = "black";
    })  

    div.addEventListener('mouseenter', (e) => {
        if(mouseDown){
            const target = e.target
            target.style.backgroundColor = "black";
        }
    })

})
