const divControlsRef = document.querySelector('#controls')

const inputControlsRef = divControlsRef.firstElementChild
const btnRenderRef = divControlsRef.querySelector('[data-action="render"]')
const btnDestroyRef = divControlsRef.querySelector('[data-action="destroy"]')



inputControlsRef.addEventListener('click', getNumber )
//     (event) => {

//     //  console.log(arr.push(+event.target.value.));
//     let value = [+event.target.value]
//     // value = value.pop()
//  arr = value
//  console.log(arr)
// })

function getNumber () {
+inputControlsRef.value;
   
}

function createDiv(getNumber) {

for (let i = 0; i < getNumber; i +=1) {
   
    console.log('sd')
  }
}






// btnRenderRef.addEventListener('click', () =>{

    
// })