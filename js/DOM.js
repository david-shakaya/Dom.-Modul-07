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

const products = [{
    name: 'Светоприводы',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, earum quasi libero veniam totam voluptatibus unde, excepturi nihil dolorem quia voluptatem corporis tempore cumque laboriosam est nulla in. Officia.',
    price: 2000,
    isOnline: true
},
{
    name: 'Сракорефрижираторы',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, earum quasi libero veniam totam voluptatibus unde, excepturi nihil dolorem quia voluptatem corporis tempore cumque laboriosam est nulla in. Officia.',
    price: 1400,
    isOnline: false

},
{
    name: 'Алюминевые огурцы',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, earum quasi libero veniam totam voluptatibus unde, excepturi nihil dolorem quia voluptatem corporis tempore cumque laboriosam est nulla in. Officia.',
    price: 325,
    isOnline: false
}]




const fn = (productName) => {

const wrapperRef = document.createElement('div') //Динамически создаем елемент div
wrapperRef.classList.add('product-cart')  // Добавляем класс div - у
console.log(wrapperRef)


    const titleRef = document.createElement('h2') //Динамически создаем елемент
    
    const isOnlineProducts = productName.isOnline  //Создаем условие, если тру верни is_online_products если нет...
        ? 'is_online_products'
        : 'is_not_online_products';
    titleRef.classList.add('product-title', isOnlineProducts)
    titleRef.textContent = productName.name  //Добавляем текст в тег h2



const descRef = document.createElement('p')
descRef.classList.add('product-subtitle')
descRef.textContent = productName.description


const descPriceRef = document.createElement('p')
descPriceRef.classList.add('product-desc-price')
descPriceRef.textContent = `Цена: ${productName.price} кредитов`


    
wrapperRef.append(titleRef, descRef, descPriceRef) //Добавляем в див другие елементы 'апендом'

return wrapperRef //ВОзвращаем див в котором уже все элементы
}

const createArreyTags = products.map(product => fn(product))
 //создаем функц. которая возвраще масив обьектов полученой из FN. Тоесть функц. возвращает результат другой функц.
console.log(createArreyTags)

 
const cardRoot = document.querySelector('#root') // Находим "id=root" в HTML разметке и присваеваем переменной то что нашли
cardRoot.append(...createArreyTags) // Распыляем масив обектов и апендом добавл. в дом// Добавляем созданые элементы в ДОМ


/* 
*
* 
*
*/



