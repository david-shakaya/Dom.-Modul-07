const divControlsRef = document.querySelector('#controls')

const inputControlsRef = divControlsRef.firstElementChild
const btnRenderRef = divControlsRef.querySelector('[data-action="render"]')
const btnDestroyRef = divControlsRef.querySelector('[data-action="destroy"]')

console.log(btnDestroyRef);

let arr = [];

inputControlsRef.addEventListener('click', (event) => {

    // console.log(arr.push(+event.target.value.));
    let value = [+event.target.value] 
    value = value.pop()

    console.log(value)
for (let i = 0; i < value; i++) {
    // const element = array[i];
arr.push([i])
}
//  console.log(value);

console.log(arr);
} )

// for (let i = 0; i < arr; i++) {
//     // const element = array[i];
//     console.log(i);
// }