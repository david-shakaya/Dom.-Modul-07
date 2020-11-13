let box;

const divControlsRef = document.querySelector('#controls')

const inputControlsRef = divControlsRef.firstElementChild
const btnRenderRef = divControlsRef.querySelector('[data-action="render"]')
const btnDestroyRef = divControlsRef.querySelector('[data-action="destroy"]')

const divRef = document.querySelector('div#boxes')


let divFindRef;





inputControlsRef.addEventListener('click', getNumber)
btnRenderRef.addEventListener('click', () => createDiv(getNumber()) )
btnDestroyRef.addEventListener('click', () =>  createDiv(destroyBox()))

//  щитает клики
 function getNumber() {   
   return +inputControlsRef.value;  
    
 }
//   уничтожает боксы
function destroyBox() {
    inputControlsRef.value = 0

    
     while (divRef.firstChild) { 
         divRef.firstChild.remove()
    }
    
 }

//   создает боксы
function createDiv(amaunt) {
    for (let i = 0; i < amaunt; i += 1) {
        
        box = document.createElement('div')
        box.classList.add('box')
        box.style.backgroundColor = elementRand();
        box.style.height = abbSize();
        
        divRef.append(box)
        console.log(divRef);
    }
    // let i = 3;
    
    
    divFindRef = document.querySelector('.box')
   
}





function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function elementRand() {
    box.style.backgroundColor =
        'rgb(' + getRandomInt(0, 255) + ', '
        + getRandomInt(0, 255) +
        ', ' + getRandomInt(0, 255) + ')';
  };


  
let width = 20
let height = 20

function abbSize() {


    if (divRef.firstChild) {
      
        box.style.width = width += 10
        box.style.height = height += 10
    }
    else {
        box.style.width = width = 30
        box.style.height = height = 30
    }
    
}

console.log(abbSize());
