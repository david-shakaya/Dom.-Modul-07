const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// const abbIngredients = document.createElement('li')
// const abbTextIngredients = abbIngredients.textContent ='nfhfh'
// console.log(abbIngredients)




for (let i = 0; i < ingredients.length; i += 1){
  
  const abbIngredients = document.createElement('li') // создаем лишки
  abbIngredients.textContent = ingredients[i]   // Добавляем в лишки текст. из масива ingredients[i] который проходим циклом
  const abbInDom = document.querySelector('#ingredients') //Находим елемент по ID 
  
   abbInDom.append(abbIngredients)  //Апендив в ЮЛ по имени  id
 
}

