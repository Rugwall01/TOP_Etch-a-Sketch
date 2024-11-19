
const body = document.querySelector("body");
const container = document.querySelector("#div-container");


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

createElementsWithClass(50, 50, 'grid-y', 'grid-x');

const divs = document.querySelectorAll('div');

divs.forEach(div => {

div.addEventListener('mouseover', (e) => {
    target = e.target
    target.style.backgroundColor = "lightblue";

})
})
