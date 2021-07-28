import galleryItems from "./app.js";

const galleryRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxOverlayRef = document.querySelector(".lightbox__overlay");
const lightboxContentRef = document.querySelector(".lightbox__content");
const lightboxImageRef = document.querySelector(".lightbox__image");
const lightboxButtonRef = document.querySelector(".lightbox__button");

// create dinamic elemens HTML
const cardsMarkup = createGallery(galleryItems);
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
      tabindex = num.indexOf + 1
    />
  </a>
</li>
    `;
    })
    .join("");
}
galleryRef.insertAdjacentHTML("beforeend", cardsMarkup);

// add Events Listeners
galleryRef.addEventListener("click", onGalleryRefClick);
lightboxRef.addEventListener("click", onCloseModal);
document.addEventListener("keydown", onCloseModalAfterEsc);

// Event handler
function onGalleryRefClick(e) {
  e.preventDefault();
  const target = e.target;
  console.log(target);
  const isTadgetImg = target.classList.contains(".js-gallery");

  if (isTadgetImg) {
    lightboxRef.classList.add("is-open");
    lightboxImageRef.setAttribute("src", target);
    lightboxImageRef.setAttribute("alt", target);
  }
}

function onCloseModal(e) {
  if (e.target.nodeName === "BUTTON") {
    lightboxEl.classList.toggle("is-open");
  }
}

function onCloseModalAfterEsc(e) {}

// helpers function

function closeModal() {}

// function onOpenModal(e) {
//   // e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   lightboxEl.classList.toggle("is-open");
//   lightboxImageEl.src = e.target.src;
//   lightboxImageEl.alt = e.target.alt;
// }
//--------------- CloseModal--------

// console.log(createGallery(galleryItems));

// =======================================
