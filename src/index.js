import './css/styles.css';

import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages, inputEl } from './fetch';
import { galleryList, renderImagesList, renderMoreImagesList } from './renderImagesList';
const inputFormEl = document.querySelector('#search-form')
const loadMoreBtnEl = document.querySelector('.load-more')
const messageEL = document.querySelector('.message-end')
let page = 1;
const per_page = 40;
let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, });




// const showBigPicture = () => {

//    gallery.captionDelay = 250;
//   gallery.on('show.simplelightbox');
 
// };
// const refreshBigPicture = () => {
//   let gallery = new SimpleLightbox('.gallery a');
  
//   gallery.refresh();
 
// };
inputFormEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  page = 1;
  messageEL.classList.add('is-hidden');

  if (!inputEl.value.trim()) { return }
  else {
    try { 
     const {data} = await fetchImages(page, per_page)
      if (data.totalHits === 0) {
        galleryList.textContent = '';
        loadMoreBtnEl.classList.add('is-hidden');
        throw new Error()
      }
    
      renderImagesList(data);
      
      gallery.on('show.simplelightbox');
      gallery.refresh();
      Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`)
      if (Math.ceil(data.totalHits / per_page) === page) {
      
        loadMoreBtnEl.classList.add('is-hidden');
        messageEL.classList.remove('is-hidden')
      } else {
        loadMoreBtnEl.classList.remove('is-hidden');
        messageEL.classList.add('is-hidden')
      }
    
    } catch(err) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
    };
  }
});
async function handleLoadMoreImages() {
  page += 1;
 try {
  const { data } = await fetchImages(page, per_page)
   
  renderMoreImagesList(data);
    
 gallery.on('show.simplelightbox');
 gallery.refresh();
    
          if (Math.ceil(data.totalHits / per_page) === page) {
        loadMoreBtnEl.classList.add('is-hidden');
         messageEL.classList.remove('is-hidden')
    } else {
        loadMoreBtnEl.classList.remove('is-hidden');
         messageEL.classList.add('is-hidden')
         };
     
  } catch(err) {
  loadMoreBtnEl.classList.add('is-hidden');
  galleryList.textContent = 'no images'};
 
};
loadMoreBtnEl.addEventListener('click', handleLoadMoreImages);
