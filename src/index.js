import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import { catSelection } from './cat-api';

export const catSelect = document.querySelector('#breed-select');
export const catDiv = document.querySelector('#cat-info');
export const loader = document.querySelector('#loader');
export const error = document.querySelector('#error');

loader.classList.remove('display');

fetchBreeds();

catSelect.addEventListener('change', catSelection);

// API key: live_YzNJ606a2VcCgBF3J69KtewCDXMhWpvZo30t5cQDiNk6Fuej845NaRAfU2zvDojG

// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET',
//   headers: {
//     // Authorization: 'TOKEN',
//     'X-Custom-Header': 'custom value',
//     origin: 'https://google.com', // doesn't work
//   },
// });

// server error response - 404 not found
// fetch('https://jsonplaceholder.typicode.com/uers', {
//   method: 'GET',
// })
//   .then((response) => {
//     console.log(`request status code is: ${response.status}`);
//     console.log('is response okay', response.ok);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('err', err);
//   });

// // fetch error, wrong domain
// fetch('https://jsonplaceholder.picode.com/users', {
//   method: 'GET',
// })
//   .then((response) => {
//     console.log(`request status code is: ${response.status}`);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('err', err);
//   });

// // server response - 200 ok
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET',
// })
//   .then((response) => {
//     console.log(`request status code is: ${response.status}`);
//     console.log('is response ok', response.ok);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('err', err);
//   });

// function pingUrl(url, query) {
//   return new Promise((resolve, reject) => {
//     const querystring = new URLSearchParams(query);
//     fetch(`${url}?${querystring}`)
//       .then(response => {
//         if (!response.ok) {
//           reject(`Error code ${response.status}`);
//         } else {
//           return response.json();
//         }
//       })
//       .then(data => {
//         resolve(data);
//       })
//       .catch(err => reject(err));
//   });
// }
