export const galleryList = document.querySelector('.gallery');
const logoPath = new URL('./images/icons.svg', import.meta.url);
export const renderImagesList = (data) => {
  
  const markup = (data.hits).map(({ webformatURL, tags, likes, views, comments, downloads, largeImageURL }) => {
    return `<div class="photo-card">
        <div class ="card-thumb"><a class="gallery__link" href="${largeImageURL}">
         <img src=${webformatURL} alt=${tags} loading="lazy" />
         </div>
         <div class="info">
          <p class="info-item">
          <svg class="likes-icon" width="18" height="18">
      <use href="${logoPath}#icon-heart"></use>
    </svg> ${likes}
          </p>
           <p class="info-item">
             <svg class="likes-icon" width="18" height="18">
      <use href="${logoPath}#icon-eye"></use>
    </svg> ${views}
           </p>
           <p class="info-item">
             <svg class="likes-icon" width="18" height="18">
      <use href="${logoPath}#icon-bubbles4"></use>
    </svg> ${comments}
           </p>
           <p class="info-item">
             <svg class="likes-icon" width="18" height="18">
      <use href="${logoPath}#icon-download"></use>
    </svg> ${downloads}
           </p>
         </div>
</div>`
  }).join("");

  galleryList.innerHTML = markup;
};

export const renderMoreImagesList = (data) => {
  
     const markup = (data.hits).map(({webformatURL, tags, likes, views, comments, downloads, largeImageURL}) => {
         return `<div class="photo-card">
        <div class ="card-thumb"><a class="gallery__link" href="${largeImageURL}">
         <img src=${webformatURL} alt=${tags} loading="lazy" />
         </div>
         <div class="info">
          <p class="info-item">
          <svg class="likes-icon" width="18" height="18">
      <use href="${logoPath}#icon-heart"></use>
    </svg> ${likes}
          </p>
           <p class="info-item">
             <svg class="likes-icon" width="18" height="18">
      <use href="${logoPath}#icon-eye"></use>
    </svg> ${views}
           </p>
           <p class="info-item">
             <svg class="likes-icon" width="18" height="18">
      <use href="${logoPath}#icon-bubbles4"></use>
    </svg> ${comments}
           </p>
           <p class="info-item">
             <svg class="likes-icon" width="18" height="18">
      <use href="${logoPath}#icon-download"></use>
    </svg> ${downloads}
           </p>
         </div>
</div>`
     }).join("");
    galleryList.insertAdjacentHTML('beforeend', markup);
    
   }
 
 