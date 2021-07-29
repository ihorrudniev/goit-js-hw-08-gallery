import galleryItems from "./app.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightbox__overlay: document.querySelector(".lightbox__overlay"),
  lightbox__image: document.querySelector(".lightbox__image"),
  lightbox__button: document.querySelector(".lightbox__button"),
};

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link"
    href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>
`;
    })
    .join("");
}

console.log(createGallery(galleryItems));

const galleryMarkup = createGallery(galleryItems);
refs.galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

/*Open and close modal*/

function onOpenLightboxToggle(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  refs.lightbox.classList.toggle("is-open");
  refs.lightbox__image.src = e.target.dataset.source;
  refs.lightbox__image.alt = e.target.alt;
}

function onCloseLightboxBtn(e) {
  if (e.target.nodeName === "BUTTON") {
    removeClassIsOpen();
  }
}

function onCloseLightboxOverlay(e) {
  if (e.currentTarget === e.target) {
    removeClassIsOpen();
  }
}

function onCloseLightboxESC(e) {
  if (e.key !== "Escape") {
    return;
  }
  removeClassIsOpen();
}

function removeClassIsOpen() {
  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = "";
  refs.lightbox__image.alt = "";
}

refs.galleryList.addEventListener("click", onOpenLightboxToggle);
refs.lightbox__button.addEventListener("click", onCloseLightboxBtn);
refs.lightbox__overlay.addEventListener("click", onCloseLightboxOverlay);
window.addEventListener("keyup", onCloseLightboxESC);
