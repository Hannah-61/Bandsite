import BandSiteApi from './band-site-api.js';

const showsContainer = document.querySelector('.shows__container');

/**
 * Create a show element
 * @param {Object} show - Show object from the API
 * @returns {HTMLElement} The show DOM element
 */
function createShowElement(show) {
  const showDiv = document.createElement('div');
  showDiv.classList.add('shows__new');

  // Date
  const dateTitle = document.createElement('h4');
  dateTitle.classList.add('shows__date');
  dateTitle.innerText = 'DATE';
  showDiv.appendChild(dateTitle);

  const dateValue = document.createElement('h3');
  dateValue.classList.add('shows__date-actual');
  dateValue.innerText = new Date(show.date).toLocaleDateString();
  showDiv.appendChild(dateValue);

  // Venue
  const venueTitle = document.createElement('h4');
  venueTitle.classList.add('shows__venue');
  venueTitle.innerText = 'VENUE';
  showDiv.appendChild(venueTitle);

  const venueValue = document.createElement('h3');
  venueValue.classList.add('shows__venue-actual');
  venueValue.innerText = show.place;
  showDiv.appendChild(venueValue);

  // Location
  const locationTitle = document.createElement('h4');
  locationTitle.classList.add('shows__location');
  locationTitle.innerText = 'LOCATION';
  showDiv.appendChild(locationTitle);

  const locationValue = document.createElement('h3');
  locationValue.classList.add('shows__location-actual');
  locationValue.innerText = show.location;
  showDiv.appendChild(locationValue);

  // Button
  const ticketButton = document.createElement('button');
  ticketButton.classList.add('shows__button');
  ticketButton.innerText = 'BUY TICKETS';
  showDiv.appendChild(ticketButton);

  return showDiv;
}

/**
 * Load and display shows
 */
async function loadShows() {
  try {
    const shows = await BandSiteApi.getShowDates();
    showsContainer.innerHTML = '';
    shows.forEach((show) => {
      const showElement = createShowElement(show);
      showsContainer.appendChild(showElement);
    });
  } catch (error) {
    console.error('Error loading shows:', error);
  }
}

// Initial load of shows
loadShows();
