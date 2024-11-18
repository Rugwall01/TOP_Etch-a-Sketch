
const body = document.querySelector("body");


function createElementsWithClass(n, className) {
    for(let i = 0; i < n; i++){
        const element = document.createElement('div');

        element.classList.add(className);

        body.appendChild(element);
    }
}


createElementsWithClass(16, 'grid');