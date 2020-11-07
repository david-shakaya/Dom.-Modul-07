const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];






// function abbElem (element){
// for (let i = 0; i < element.length; i += 1){
  
//   const abbIngredients = document.createElement('li') // создаем лишки
//   abbIngredients.textContent = element[i]   // Добавляем в лишки текст. из масива ingredients[i] который проходим циклом
//   const abbInDom = document.querySelector('#ingredients') //Находим елемент по ID 
  
//    abbInDom.append(abbIngredients)  //Апендиm в ЮЛ по имени  id
 
//   }
// }
// abbElem(ingredients)
 



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// решение задачи с помощью стрелочной функции и цыкла forEach
const get = (arr) => arr.forEach(element => {

 const abbIngredients = document.createElement('li') // создаем лишки
  abbIngredients.textContent = element   // Добавляем в лишки текст. из масива ingredients[i] который проходим циклом
  const abbInDom = document.querySelector('#ingredients') //Находим елемент по ID 
  
  abbInDom.append(abbIngredients)  
});

get(ingredients)
