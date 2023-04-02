import './css/styles.css';
import axios from "axios";
import Notiflix from 'notiflix';
import { fetchImages, inputEl, page } from './fetch';
import { galleryList, renderImagesList } from './renderImagesList';
const inputFormEl = document.querySelector('#search-form')
const loadMoreBtnEl= document.querySelector('.load-more')




inputFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  
  fetchImages().then((users) => { renderImagesList(users) });
  page += 1;
  console.log(page)
});

  //  