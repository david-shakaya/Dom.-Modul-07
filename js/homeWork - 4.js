


const createCounter = function () {
 
  let privateValue = 0;

  const increment = function() {
   return privateValue += 1;
    
    };
     const decrement = function() {
   return privateValue -= 1;
    
    };

    const remuve = function () {
      return  privateValue = 0
    }
    
  return {
    increment, decrement, remuve
  };
};

const counter = createCounter();


const decrementRef = document.querySelector('button[data-action="decrement"]')
const incrementRef = document.querySelector('button[data-action="increment"]')
const remuveRef = document.querySelector('button[data-action="remuve"]')
const spanRef = document.querySelector('#value')


decrementRef.addEventListener('click', () => {
    
    spanRef.textContent = counter.decrement();
  
});

incrementRef.addEventListener('click', () => {
    
    spanRef.textContent = counter.increment();

});

remuveRef.addEventListener('click', () => {
    spanRef.textContent = counter.remuve();
})
