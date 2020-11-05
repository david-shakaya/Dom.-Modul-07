

// function countElem(elem) {
    
//     const myTitle = document.getElementById(elem).children;
//     console.log(`ul#categories: В списке  ${myTitle.length} категории.`)
// }
// countElem('categories') //ul#categories: В списке  3 категории.


// function countListElem(indexProduct) {
//     const findSelektor = document.querySelectorAll('.item')
// const NumberElem = findSelektor[indexProduct].querySelector('h2')

// const elemNow = findSelektor[indexProduct]
// const lengthList = elemNow.querySelectorAll('li').length
   
// console.log(`Категория: ${NumberElem.textContent} \n Количество элементов: ${lengthList}`)

// }

// countListElem(0) //Категория: Животные 
// //  Количество элементов: 4
// countListElem(1) //Категория: Продукты 
// //  Количество элементов: 3
// countListElem(2)  //Категория: Технологии 
// //  Количество элементов: 5

// >>>>>>>>>>>>>>>>>>>>>>>>>>> Еще раз решаем <<<<<<<<<<<<<<<<<< ЛУчшее как по мне решение
// function countElem(elem) {
    
//     const myTitle = document.querySelector(elem).children;
//     console.log(`categories: В списке  ${[...myTitle].length} категории.`)
  
// }
// countElem('ul#categories') //ul#categories: В списке  3 категории.


// function findQuantityInList(indexProduct) {
// const list = document.querySelectorAll('.item')
// const category = list[indexProduct].firstElementChild

// console.log(`Категория: ${category.textContent}`)

// const numberItem  = list[indexProduct].children[1].children.length
// console.log('Количество элементов:',numberItem)
// }
// findQuantityInList(0) //Категория: Животные
//             // Количество элементов: 4
// findQuantityInList(1) //Категория: Продукты
//             // Количество элементов: 3
// findQuantityInList(2) //Категория: Технологии
//             // Количество элементов: 5





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ЧУЖОЕ РЕШЕНИЕ ПЕРВОЙ ЗАДАЧИ <<<<<<<<<<<<<<<
// const listReference = document.querySelector('ul#categories');
// const listContent = ({ children }) =>{
//     console.log(`В списке ${children.length} категории.`);

//   const categoriesList = [...children];
//     categoriesList.forEach(item => {
//         const categoryTitle = item.querySelector('ul#categories h2').textContent;
//         console.log('Категория: ', categoryTitle);
//         const categoryLength = item.querySelectorAll('ul#categories li').length;
//         console.log('Количество элементов: ', categoryLength);
//     });
// };
// listContent(listReference);