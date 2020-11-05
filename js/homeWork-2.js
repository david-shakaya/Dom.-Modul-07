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

const metnt = ingredients.forEach((elem) => {
    const wrapperRef = ('ul#ingredients');

  wrapperRef.apend((`${document.createElement('li').textContent = elem}`))
// wrapperRef.append(titleRef, descRef, descPriceRef)
})
console.log(metnt)
// const names = users.map(user => user.name);