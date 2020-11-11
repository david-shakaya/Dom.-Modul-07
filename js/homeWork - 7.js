const inputFontSizeControlRef = document.querySelector('#font-size-control')
const minRef = +inputFontSizeControlRef.attributes.min.value
const maxRef = +inputFontSizeControlRef.attributes.max.value



const spanTextRef = document.querySelector('#text');


inputFontSizeControlRef.addEventListener('input', (e) => {
    
  spanTextRef.style.fontSize = e.target.value 
        
})

// создаем функцию если e.target.value +1 то фонтсайз тоже +1