const searchButton = document.getElementById('search-button');
const overlay = document.getElementById('modal-overlay');
const movieName = document.getElementById('movie-name');
const movieYear = document.getElementById('movie-year');

async function searchButtonClickHandler() {
  try {
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${movieName.value
      .split(' ')
      .join('+')}&y=${movieYear.value}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('data: ', data);
    overlay.classList.add('open');
  } catch (error) {}
}

searchButton.addEventListener('click', searchButtonClickHandler);
