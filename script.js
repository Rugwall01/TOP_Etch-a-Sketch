
const body = document.querySelector("body");


function createElementsWithClass(n, className) {
    for(let i = 0; i < n; i++){
        const element = createElement('div');

        element.classList.add(className);

        document.body.appendChild(element);
    }
}


createElementsWithClass(16, 'grid');