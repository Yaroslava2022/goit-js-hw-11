export const inputEl = document.querySelector('input[name="searchQuery"]')
// export let page = 1;
export function fetchImages(page, per_page) {
  const base_url = 'https://pixabay.com/api/';
  const key = '24900959-71ad91e9c5a66d7f732acf0b4';
  const image = inputEl.value.trim(); 
//    page = 1;
  
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    // per_page: 40,
    // page: '${page}',
  })
 
   
        return fetch(`${base_url}?key=${key}&q=${image}&${searchParams}&page=${page}&per_page=${per_page}`).then(
     (res) => {
       if (!res.ok) {
         throw new Error(res.status);
            }
            const result = res.json();
            
       return result;
     }
   );
   }