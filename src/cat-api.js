import { catSelect } from '.';
import { catDiv } from '.';
export let catName;
export let catDescription;
export let catTemper;
let catsArray = [];

export function fetchBreeds() {
  return new Promise((resolve, reject) => {
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
          catSelect.append(catOption);
        });
      })
      .catch(err => reject(err));
  });
}

export function catSelection() {
  const selectedOption = catSelect.value;
  catsArray.forEach(cat => {
    if (cat.id === selectedOption) {
      catName = cat.name;
      catTemper = cat.temperament;
      catDescription = cat.description;
      console.log(catName, catTemper, catDescription);
    }
  });
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
        console.log(catInfo);
        catDiv.innerHTML = `<img src="${catInfo['0'].url}" alt=""></img>
        <h1>${catName}</h1>
        <p>${catDescription}</p>
        <p><b>Temperament:</b> ${catTemper}</p>
        `;

        // const htmlString = `<img src="" alt="">`;
      })
      .catch(err => reject(err));
  });
}
