import BandSiteApi from "./band-site-api.js";

const apiKey = "6f8006e4-d10f-42e7-8d8c-0fb2f701309b";
let showDates = new BandSiteApi(apiKey);
const showsListContainer = document.getElementById('shows__table');
let selectedShowItem = null;

function createShow(show) {
    const showItem = document.createElement('div');
    showItem.classList.add('shows__item');

    const dateElement = document.createElement('div');
    dateElement.classList.add('shows__item-detail');

    const dateLabel = document.createElement('h4');
    dateLabel.classList.add('shows__label--mobile');
    dateLabel.textContent = 'Date';

    const dateDetail = document.createElement('p');
    dateDetail.classList.add('shows__item-text', 'shows__item-text--date');

    dateDetail.textContent = new Date(show.date).toDateString();

    dateElement.appendChild(dateLabel);
    dateElement.appendChild(dateDetail);

    const placeElement = document.createElement('div');
    placeElement.classList.add('shows__item-detail');

    const placeLabel = document.createElement('h4');
    placeLabel.classList.add('shows__label--mobile');
    placeLabel.textContent = 'Venue';

    const placeDetail = document.createElement('p');
    placeDetail.classList.add('shows__item-text');
    placeDetail.textContent = show.place;

    placeElement.appendChild(placeLabel);
    placeElement.appendChild(placeDetail);

    const locationElement = document.createElement('div');
    locationElement.classList.add('shows__item-detail');

    const locationLabel = document.createElement('h4');
    locationLabel.classList.add('shows__label--mobile');
    locationLabel.textContent = 'Location';

    const locationDetail = document.createElement('p');
    locationDetail.classList.add('shows__item-text');
    locationDetail.textContent = show.location;

    locationElement.appendChild(locationLabel);
    locationElement.appendChild(locationDetail);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('shows__button-wrapper');

    const buyButton = document.createElement('button');
    buyButton.classList.add('shows__button');
    buyButton.textContent = 'Buy Tickets';

    buttonWrapper.appendChild(buyButton);

    showItem.appendChild(dateElement);
    showItem.appendChild(placeElement);
    showItem.appendChild(locationElement);
    showItem.appendChild(buttonWrapper);

    showsListContainer.appendChild(showItem);

    showItem.addEventListener('click', () => {
        if (selectedShowItem) {
            selectedShowItem.classList.remove('shows__item--selected');
        }
        showItem.classList.add('shows__item--selected');
        selectedShowItem = showItem;
    });
    
}

async function displayShows() {
    try {
      const shows = await showDates.getShows();
      
      shows.forEach((show) => {
        createShow(show)});

    } catch (error) {
      console.error('Error retrieving shows:', error);
    }
  }
  
  displayShows();

