export const inputEl = document.querySelector('input[name="searchQuery"]')
export let page = 1;
export function fetchImages() {
  const base_url = 'https://pixabay.com/api/';
  const key = '24900959-71ad91e9c5a66d7f732acf0b4';
  const image = inputEl.value.trim(); 
//    page = 1;
  
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 5,
    // page: '${page}',
  })
 
   
        return fetch(`${base_url}?key=${key}&q=${image}&${searchParams}&page=${page}`).then(
     (res) => {
       if (!res.ok) {
         throw new Error(res.status);
            }
            const result = res.json();
            
       return result;
     }
   );
   }