import { View } from './View';

class CardView extends View {
  toggleFadeInOut(root) {
    const cards = root.querySelector('.cards');
    const cardsContainer = root.querySelector('cards__container');
    const firstCard = root.querySelector('.card--first');

    const options = {
      root: cardsContainer,
      rootMargin: '0px',
      threshold: [0],
    };

    const obsCallback = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        cards.classList.add('fade-out');
      }

      if (entry.isIntersecting) {
        cards.classList.remove('fade-out');
      }
    };

    const observer = new IntersectionObserver(obsCallback, options);
    observer.observe(firstCard);
  }

  _generateMarkup(data) {
    return `
      <div class="cards__container">
      ${this._data
        .map((cardData, i) => {
          if (!i) {
            return this._generateMarkupCard({ cardData, firstCard: true });
          } else {
            return this._generateMarkupCard({ cardData, firstCard: '' });
          }
        })
        .join('')}
      </div>`;
  }

  _generateMarkupCard({ cardData, firstCard }) {
    return `
      <div class="card ${firstCard && 'card--first'}">
        <div class="card__circle">
          <button class="card__button">
            <span class="card__dots"
              ><i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i
            ></span>
          </button>
        </div>
        <div class="card__image">
          <a href="#" class="card__image-anchor">
            <img
              src="${cardData.posterImage}"
              alt="${cardData.title}"
            />
          </a>
        </div>
        <div class="card__content">
          <div class="card__score">${cardData.voteAverage}</div>
          <div class="card__title">
            <a href="#" class="card__title-anchor">${cardData.title}</a>
          </div>
          <div class="card__date">${cardData.releaseDate}</div>
        </div>
      </div>
    `;
  }
}

export default new CardView();
