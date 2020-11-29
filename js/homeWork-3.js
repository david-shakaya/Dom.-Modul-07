const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const addImages = (arr) => arr.forEach( img =>{

const gallery = document.querySelector('#gallery') 

    gallery.insertAdjacentHTML('afterbegin', `<li><img class = "img-list-item-js" 
    src=" ${img.url}" alt= "${img.alt}" /> </li > `)
    
})
addImages(images)


// // >>>>>>>>>>>>>>>>>>>>>>>Лучший вариант вставки 
// const galleryRef = document.querySelector('#gallery');
// console.log(galleryRef);


// const fn = images.reduce(function (acc, img) {

//  return  acc.concat(`<li><img class = "img-list-item-js"  src=" ${img.url}" alt= "${img.alt}" /> </li >` )
  
// },'')

// console.log(fn);
// galleryRef.insertAdjacentHTML('afterbegin',fn)