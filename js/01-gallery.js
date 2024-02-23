import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
let instance;

galleryItems.forEach(item => {
    const img = document.createElement('img');
    img.src = item.preview;
    img.alt = item.description;
    img.classList.add('gallery__image');

    img.addEventListener('click', () => {
        instance = basicLightbox.create(`
            <img src="${item.original}" alt="${item.description}" width="800" height="600">
        `);
        instance.show();
        document.addEventListener('keydown', onKeyPress);
    });

    galleryContainer.appendChild(img);
});

function onKeyPress(event) {
    if (event.code === 'Escape') {
        if (instance && typeof instance.visible === 'function' && instance.visible()) {
            instance.close();
            document.removeEventListener('keydown', onKeyPress);
        }
    }
}

console.log(galleryItems);