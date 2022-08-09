// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


console.log(galleryItems);



const galleryCollection = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map((item) => `<li class="gallerry__list"><a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`).join("");

galleryCollection.insertAdjacentHTML("afterbegin", galleryMarkup);


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom'})

