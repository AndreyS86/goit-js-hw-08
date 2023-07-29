import SimpleLightbox from "simplelightbox"
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryUl = document.querySelector(".gallery");
const markup = createGalleryItems(galleryItems);

function createGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`;
  }).join(" ");
}

galleryUl.insertAdjacentHTML("beforeend", markup);
galleryUl.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery-image")) {
    return;
  }
  const source = e.target.dataset.source;

  // const instance = new SimpleLightbox.create(`
  //        <img src="${e.target.dataset.source}" width="800" height="600">`);
  // instance.show();
};

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt'
})
