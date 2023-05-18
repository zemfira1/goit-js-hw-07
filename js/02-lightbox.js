//Сделай такую же галерею как в первом задании,
    //но используя библиотеку SimpleLightbox, которая возьмет на себя
    //обработку кликов по изображениям, открытие и закрытие модального окна,
    //а также пролистывание изображений при помощи клавиатуры.
    //Посмотри демо видео работы галереи с подключенной библиотекой.

   //Выполняй это задание в файлах 02 - lightbox.html и 02 - lightbox.js.
   //Разбей его на несколько подзадач:
   
//1// Создание и рендер разметки по массиву данных galleryItems и 
//предоставленному шаблону элемента галереи.Используй готовый 
//код из первого задания.

//2// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
// Необходимо добавить ссылки на два файла: simple - lightbox.min.js 
//и simple - lightbox.min.css.

//3// Инициализация библиотеки после того как элементы галереи созданы 
//и добавлены в ul.gallery.Для этого ознакомься с документацией 
//SimpleLightbox - в первую очередь секции «Usage» и «Markup».

//4//Посмотри в документации секцию «Options» и добавь отображение
// подписей к изображениям из атрибута alt.Пусть подпись будет снизу и
// появляется через 250 миллисекунд после открытия изображения.

import { galleryItems } from './gallery-items.js';
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

list.addEventListener('click', onListCkick);

function onListCkick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

    new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250}); 
}

