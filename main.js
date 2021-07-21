import galleryItems from "./app.js";

// console.log(galleryItems);

const galleryRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxOverlayRef = document.querySelector(".lightbox__overlay");
const lightboxContentRef = document.querySelector(".lightbox__content");
const lightboxImageRef = document.querySelector(".lightbox__image");
const lightboxButtonRef = document.querySelector(".lightbox__button");

const cardsMarkup = createGallery(galleryItems);
// console.log(cardsMarkup);
galleryRef.insertAdjacentHTML("beforeend", cardsMarkup);

galleryRef.addEventListener("click", onGalleryRefClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

function onGalleryRefClick(e) {
  console.log(e.target);
}

// console.log(createGallery(galleryItems));
