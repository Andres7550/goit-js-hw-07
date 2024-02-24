import { galleryItems } from './gallery-items.js';
// Change code below this line
let instance;
const gallery = document.querySelector('.gallery');
function renderGallery() {
    gallery.innerHTML = galleryItems.map((item, index) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.preview}" data-index="${index}">
          <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
        </a>
      </li>
    `).join('');
}
renderGallery();
gallery.addEventListener('click', function (event) {
    event.preventDefault();
    const link = event.target.closest('.gallery__link');
    if (!link) return;
    const source = link.getAttribute('href');
    const des = link.querySelector('.gallery__image').getAttribute('description');
    instance = basicLightbox.create(`<img src="${source}" alt="${des}" style="max-width: 100%">`);
    instance.show();
});
console.log(galleryItems);