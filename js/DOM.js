/* 
*     Поиск DOM - узлов!!!
*  Как называем переменные при моиске DOM - узлов(CSS - селекторы)? :
*  Либо так: // const titleEl - Тайтл елемент
*  Либо так: // const titleRef - Тайтл ref (referent - cсылка)
* 
*/


/* 
*
*   - Ищем CSS селектор либо ДОМ УЗЕЛ  по названию тега'h1' ИЛИ по класу 
*   - querySelector('.title') - ищет класс селектора, возврвщает первый найденный.
*
*/
   
// const titleRef = document.querySelector('.title')
// console.log(titleRef)    //<h1 class="title">Заголовок первого порядка!!!</h1> 


// const linksRef = document.querySelectorAll('a') // Находит все селекторы с таким названием класа.
// console.log(linksRef)  //[a, a, a] - Получаем массив ссылок

/* 
*  textContent - изменяет текстовое содержимое елемента
*  пример как динамически изменить title в html документе.
*/
// titleRef = titleRef.textContent = 'Hello World' 


/* 
*  Изменяем значение атрибутов в IMG
*/
// const imageRef = document.querySelector('.img-head') //Cначала находим картинку
//  imageRef.width = 200 //  Присваиваем ширину 200 px.


/* 
*  Изменяем стили CSS через JS. Например изменим цвет ссылокы на красный.
*/

// const linkRef = document.querySelector('a')
// linkRef.style.color = 'red'

/* 
* - Напоминаю !!!! атрибуты тега это: width, href, alt, class и тд.
* - Если в разметке HTML у тега нет атрибута , ИСПОЛЬЗУЕМ методы по работе с атрибутами.
*
*
* elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false
* elem.getAttribute(name) - получает значение атрибута и возвращает его
* elem.setAttribute(name, value) - устанавливает атрибут
* elem.removeAttribute(name) - удаляет атрибут
* elem.attributes - свойство, возвращает коллекцию всех атрибутов элемента
*
*/




/* 
* - Свойство Element.classList
* -Объект, содержит методы для работы с классами элемента.
*
* - elem.classList.contains(cls) - возвращает true или false, в зависимости от того, есть ли у элемента класс cls
* - elem.classList.add(cls) - добавляет класс cls в список классов элемента
* - elem.classList.remove(cls) - удаляет класс cls из списка классов элемента
* - elem.classList.replace(oldClass, newClass) - заменяет существующий класс на указанный
* - elem.classList.toggle(cls) - если класса cls нет, добавляет его, если есть, удаляет
* 
*/

// const buttonRef = document.querySelector('.btn-active')
// console.log(buttonRef) 

//      // // Проверяем есть ли у кнопки клас - 'button-for-img'
// console.log(buttonRef.classList.contains('button-for-img')) //true

//     //  // удаляет класс cls из списка классов элемента
// buttonRef.classList.remove('button-for-img')



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*  
* - СОЗДАНИЕ ДОМ узлов (создание html- тегов)
*
// */

//   //  // Создаем в памяти тег <button>
// const btnRef = document.createElement('h1')
// console.log(btnRef)  //  //<h1>​​</h1>​


//    //  // Добавляем текст для <button>
// btnRef.textContent = 'Динамически добавляем текст'  // // <h1>​Динамически добавляем текст​</h1>​


//    //  // Добавляем класс для <h1>
// btnRef.classList.add('added-class-for-h1') // //<h1 class=​"added-class-for-h1">​Динамически добавляем текст​</h1>​


//    //  // Добавляем id для <h1>
// btnRef.id = 'title'

//   //   // Создает вложенность в div вставляем h2 и тд. parent.apend(child, child, child)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Задача <<<<<<<<<<<<<<<<<<<<<<<<<
/* 
 - Создаем динамически следующий елемент на основе обюекта product.
 
 -<div>
    <h2>Светоприводы</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, earum quasi
         libero veniam totam voluptatibus unde, excepturi nihil dolorem quia voluptatem corporis tempore 
         cumque laboriosam est nulla in. Officia.
    </p>
    <p>Цена: 2000грн.</p>
</div>
*/

// const products = [{
//     name: 'Светоприводы',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, earum quasi libero veniam totam voluptatibus unde, excepturi nihil dolorem quia voluptatem corporis tempore cumque laboriosam est nulla in. Officia.',
//     price: 2000,
//     isOnline: true
// },
// {
//     name: 'Сракорефрижираторы',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, earum quasi libero veniam totam voluptatibus unde, excepturi nihil dolorem quia voluptatem corporis tempore cumque laboriosam est nulla in. Officia.',
//     price: 1400,
//     isOnline: false

// },
// {
//     name: 'Алюминевые огурцы',
//     description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, earum quasi libero veniam totam voluptatibus unde, excepturi nihil dolorem quia voluptatem corporis tempore cumque laboriosam est nulla in. Officia.',
//     price: 325,
//     isOnline: false
// }]




// const fn = (productName) => {

// const wrapperRef = document.createElement('div') //Динамически создаем елемент div
// wrapperRef.classList.add('product-cart')  // Добавляем класс div - у
// console.log(wrapperRef)


//     const titleRef = document.createElement('h2') //Динамически создаем елемент
    
//     const isOnlineProducts = productName.isOnline  //Создаем условие, если тру верни is_online_products если нет...
//         ? 'is_online_products'
//         : 'is_not_online_products';
//     titleRef.classList.add('product-title', isOnlineProducts)
//     titleRef.textContent = productName.name  //Добавляем текст в тег h2



// const descRef = document.createElement('p')
// descRef.classList.add('product-subtitle')
// descRef.textContent = productName.description


// const descPriceRef = document.createElement('p')
// descPriceRef.classList.add('product-desc-price')
// descPriceRef.textContent = `Цена: ${productName.price} кредитов`


    
// wrapperRef.append(titleRef, descRef, descPriceRef) //Добавляем в див другие елементы 'апендом'

// return wrapperRef //ВОзвращаем див в котором уже все элементы
// }

// const createArreyTags = products.map(product => fn(product))
//  //создаем функц. которая возвраще масив обьектов полученой из FN. Тоесть функц. возвращает результат другой функц.
// console.log(createArreyTags)

 
// const cardRoot = document.querySelector('#root') // Находим "id=root" в HTML разметке и присваеваем переменной то что нашли
// cardRoot.append(...createArreyTags) // Распыляем масив обектов и апендом добавл. в дом// Добавляем созданые элементы в ДОМ






/* 
*


* 
*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

-----------------------------  CОБЫТИЯ   ----------------------------
*/




//   //Находим элемент куда хотим добавить слушатель событий
// const targetBtnRef = document.querySelector('.js-action-btn')

//   //Добаляем слушатель событ. И в скобках первым аргументом передаем
//     // какой тип действий мы будем слушать, а вторым функц. обратного вызова
// targetBtnRef.addEventListener('click', () => {
//   console.log('Клик')
// })




// >>>>>>>>>>>>>>>
// Делам что бы одна кнопка добавляла слушатель а другая снимала его.
// const targetBtnRef = document.querySelector('.js-action-btn')
// const addListenerBtnRef = document.querySelector('.js-add-listener')
// const remuveListenerBtnRef = document.querySelector('.js-remuve-listener')


  //Что бы все работало нужно создать отдельную функц. и передавать ее
  // в качестве аргумента обеим событиям.Функц имеет Ссылочный тип 
// const doStuffonClick = () => {
//      console.log('click')
//  }


// addListenerBtnRef.addEventListener('click', () => { // Вешаем слушатель на копку добавить
//     console.log('Добавили слушатель')

//     targetBtnRef.addEventListener('click', doStuffonClick) // Вешаем слушатель на кнопку которя будеть делать клик
// })

// remuveListenerBtnRef.addEventListener('click', () => {  // Удаляем слушатель 
//     targetBtnRef.removeEventListener('click', doStuffonClick)
// })


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  //Что бы достучаться до параметра который внутри функции слушателя события 
// // испльзуем .target   ПРИМЕР:

// const targetBtnRef = document.querySelector('.js-action-btn')

// targetBtnRef.addEventListener('click', (event) => {
//     console.log(event.target) // Благодаря .target мы получаем ссылку на саму кнопку
// })



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
/*
  * Событие cubmit
  * Действие браузера по умолчанию
  * Свойство elements
  *  Класс FormData
 */


//    //Ищем тег <form> и именно на него вешаем слушатель, на событии вызываем метод .preventDefault()
//    // Который ибирает дефолтные стили с кнопки отправить и не перезагружает страницу.
// const formRef = document.querySelector('.js-register-form') 
// formRef.addEventListener('submit', (event) => {
//     event.preventDefault()    // Метод снимает дефолтные стили при отправке формы!!!!
    
//     // //event - cобытие возвращает обьект и то что внутри
//     // //target - возвращает в виде обьекта  все методы и элементы что есть в форме
//     // // elements - возвращает в виде обьекта все элементы что есть в форме(кнопки. инпуты, чекбоксы)
//     // // subscription - Имя классов в html на чекбоксах
//     // // value - выводит значение того чекбокса который выбрали

//     // const formElements = event.target.elements
//     // console.dir(formElements.email.value) // david@gmail.com
//     // console.dir(formElements.subscription.value)  //pro
    

//     // // Пример того как собираем данные в масив обектов для отправки на бекенд.
    
//     // const formData = [
//     //     { name: formElements.subscription.value },
//     //     { email: formElements.email.value}]
   

//     //  Пример того как собрать все значение заполненой формы с помощью 
//     //  цикла в ключ: значение
//     const formRef = event.target;
//     const formData = new FormData(formRef)

//     const submitData = {}

//     formData.forEach((value, kay) => {
//          console.log( kay , value )
      
//         submitData[kay] = value   // Создаем обьект из полученых ключей и свойств
//     });

//     console.log(submitData)
 
// })







// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
/*
  *  Событие input i change
  *  Чекбоксы и свойство checked
*/

const inputRef = document.querySelector('.js-input');

inputRef.addEventListener('change', (event) => {
    console.log(event.target.value);  
    
    
    const abbIngredients = document.createElement('p') 
    abbIngredients.textContent = event.target.value
    // addEventListener
    // abbIngredients.classList.add('cls')
   const abbInDom =document.querySelector('.div')
    abbInDom.append(abbIngredients)  

    

})