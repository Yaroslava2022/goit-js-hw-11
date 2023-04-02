import './css/styles.css';
import axios from "axios";
import Notiflix from 'notiflix';

const inputForm = document.querySelector('#search-form')
const inputEl = document.querySelector('input[name="searchQuery"]')
const galleryList = document.querySelector('.gallery')


function fetchCountries() {
    const image = inputEl.value.trim(); 
   
        return fetch(`https://pixabay.com/api/?key=24900959-71ad91e9c5a66d7f732acf0b4&q=${image}&image_type=photo&orientation=horizontal&safesearch=true`).then(
     (res) => {
       if (!res.ok) {
         throw new Error(res.status);
            }
            const result = res.json();
            console.log(result)
       return result;
     }
   );
   }
 

const renderCountriesList = (data) => {
  
     const markup = (data.hits).map(({webformatURL, tags, likes, views, comments, downloads}) => {
         return `<div class="photo-card">
        
         <img src=${webformatURL} alt=${tags} loading="lazy" />
         <div class="info">
           <p class="info-item">
             <b>Likes:${likes}</b>
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
    galleryList.innerHTML = markup;
   }
 
   inputEl.addEventListener("input", () => {
     fetchCountries()
       .then((users) => { renderCountriesList(users) })
       .catch((error) =>
         Notiflix.Notify.failure('Oops, there is no country with that name'),
         console.log(error)
      );
    });
