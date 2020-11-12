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
    return (inputControlsRef.value = 0,
    
    divFindRef.remove())
    
    
    
 }

//   создает боксы
function createDiv(amaunt) {
    for (let i = 0; i < amaunt; i +=1) {
        
        box = document.createElement('div')
        box.classList.add('box')
        divRef.append(box)
    }
    divFindRef = document.querySelectorAll('.box')
    console.log(divFindRef);
}







// btnRenderRef.addEventListener('click', () =>{

    
// })
