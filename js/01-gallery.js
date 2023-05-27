//Создай галерею с возможностью клика по её элементам и просмотра
//полноразмерного изображения в модальном окне.Посмотри демо видео работы галереи.


//1//Создание и рендер разметки по массиву данных galleryItems и
// предоставленному шаблону элемента галереи.

//2//Реализация делегирования на ul.gallery и получение url большого изображения.

//3//Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min)
// файлы библиотеки.

//4//Открытие модального окна по клику на элементе галереи.
//Для этого ознакомься с документацией и примерами.

//5//Замена значения атрибута src элемента <img> в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из примеров
//библиотеки basicLightbox.

import { galleryItems } from './gallery-items.js';
// Change code below this line
//import * as basicLightbox from 'basiclightbox';

//console.log(galleryItems);

const list = document.querySelector('ul.gallery');

function makeGallery(items) {
    let listElements = items.map(item => {
        let itemEl = document.createElement('li');
        itemEl.classList.add('gallery__item');

        let itemLink = document.createElement('a');
        itemLink.classList.add('gallery__link');
        itemLink.href = item.original;
        itemLink.rel = "noopener noreferrer";
        itemEl.append(itemLink);

        let imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');
        imgEl.src = item.preview;
        imgEl.alt = item.description;
        imgEl.dataset.source = item.original;
        itemLink.append(imgEl);

        return itemEl;
    });
    console.log(listElements);
    list.append(...listElements);
    
};
makeGallery(galleryItems);
//console.log(list);

list.addEventListener('click', onListCkick,);

//const body = document.querySelector('body');

function onListCkick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  //добавляем опшионс как объект вторым параметром при создании instance?
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `, {
    onShow: (instance) => {
      document.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
          instance.close();
        }
      })
    },
                         //Намудрила, как поняла. Или я не поняла, что скорее всего...
                         //Но вроде всё работает))))
    onClose: (instance) => { 
      document.removeEventListener('keydown', () => { });
      list.removeEventListener('click', () => { });
    },
  });   

  instance.show();
}



//Здравтсвуйте! Не посмотрела внимательно, как должно выглядеть и сделала сначала с 
//кнопкой закрытия, поэтому вставлены 2 класса в ccs.
// Потом посмотрев видео в д.з. поняла, что эта кнопка не нужна. Выше варинт без кнопки
// Если можно, я оставлю это всё для себя здесь?



// const body = document.querySelector('body');

// function onListCkick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const instance = basicLightbox.create(`
//     <div class="modal">
//       <div class="modal-body">
//         <div class="modal-close">&times;</div>
//         <img src="${event.target.dataset.source}" width="800" height="600">
//       </div>
//     </div>`,
//     );

//   instance.show()

  
//   body.addEventListener('click', (event) => {
//     if (event.target === body.querySelector('.modal-close')) {
//       instance.close();
//     };
//   });

//   body.addEventListener('keydown', (event) => {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   });
// }


