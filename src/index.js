import { fetchBreeds } from './cat-api';
import { catSelection } from './cat-api';

export const catSelect = document.querySelector('#breed-select');
export const catDiv = document.querySelector('#cat-info');
export const loader = document.querySelector('#loader');
export const error = document.querySelector('#error');

loader.classList.remove('display');

fetchBreeds();

catSelect.addEventListener('change', catSelection);
