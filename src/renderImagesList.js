export const galleryList = document.querySelector('.gallery');
const logoPath = new URL('./images/icons.svg', import.meta.url);
export const renderImagesList = (data) => {
  
  const markup = (data.hits).map(({ webformatURL, tags, likes, views, comments, downloads }) => {
    return `<div class="photo-card">
        
         <img src=${webformatURL} alt=${tags} loading="lazy" />
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
  // galleryList.insertAdjacentHTML('beforeend', markup);
  galleryList.innerHTML = markup;
};

export const renderMoreImagesList = (data) => {
  
     const markup = (data.hits).map(({webformatURL, tags, likes, views, comments, downloads}) => {
         return `<div class="photo-card">
        
         <img src=${webformatURL} alt=${tags} loading="lazy" />
         <div class="info">
           <p class="info-item">
             <b>Likes: ${likes}</b>
           </p>
           <p class="info-item">
             <b>Views: ${views}</b>
           </p>
           <p class="info-item">
             <b>Comments: ${comments}</b>
           </p>
           <p class="info-item">
             <b>Downloads: ${downloads}</b>
           </p>
         </div>
</div>`
     }).join("");
    galleryList.insertAdjacentHTML('beforeend', markup);
    
   }
 
 