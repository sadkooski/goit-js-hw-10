import { catSelect } from '.';
import { catDiv } from '.';

export function fetchBreeds() {
  return new Promise((resolve, reject) => {
    let catsArray = [];
    fetch('https://api.thecatapi.com/v1/breeds', {
      method: 'GET',
      headers: {
        'x-api-key':
          'live_YzNJ606a2VcCgBF3J69KtewCDXMhWpvZo30t5cQDiNk6Fuej845NaRAfU2zvDojG',
      },
    })
      .then(response => {
        if (!response.ok) {
          reject(`Error code ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then(data => {
        resolve((catsArray = data));
        console.log(catsArray);
        catsArray.forEach(cat => {
          const catOption = document.createElement('option');
          catOption.textContent = cat.name;
          catOption.value = cat.id;
          //   console.log(catOption);
          catSelect.append(catOption);
        });
      })
      .catch(err => reject(err));
  });
}

export function catSelection() {
  const selectedOption = catSelect.value;
  console.log(selectedOption);
  fetchCatByBreed(selectedOption);
}

export function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    let catInfo;
    fetch('https://api.thecatapi.com/v1/images/search', {
      method: 'GET',
      headers: {
        'x-api-key':
          'live_YzNJ606a2VcCgBF3J69KtewCDXMhWpvZo30t5cQDiNk6Fuej845NaRAfU2zvDojG',
      },
    })
      .then(response => {
        if (!response.ok) {
          reject(`Error code ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then(data => {
        resolve((catInfo = data));
        // console.log(catInfo[0]);

        // const htmlString = `<img src="" alt="">`;

        console.log(catInfo);
      })
      .catch(err => reject(err));
  });
}
