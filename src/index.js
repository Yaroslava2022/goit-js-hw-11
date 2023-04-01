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
       return res.json();
     }
     
   );
   }
 
 
 function renderCountriesList(users) {
     const markup = users
       .map((user) => {
         return `<div class="photo-card">
         <img src=${user.hits.webformatURL} alt=${user.hits.tags} loading="lazy" />
         <div class="info">
           <p class="info-item">
             <b>Likes:${user.hits.likes}</b>
           </p>
           <p class="info-item">
             <b>Views: ${user.hits.views}</b>
           </p>
           <p class="info-item">
             <b>Comments: ${user.hits.comments}</b>
           </p>
           <p class="info-item">
             <b>Downloads: ${user.hits.downloads}</b>
           </p>
         </div>
       </div>`
 
       })
       .join("");
    galleryList.innerHTML = markup;
    
   }
 
   inputEl.addEventListener("input", () => {
   
    fetchCountries( )
      .then((users) => renderCountriesList(users))
      .catch((error) => 
      Notiflix.Notify.failure('Oops, there is no country with that name'),
      );
    });
