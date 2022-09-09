import { View } from './View';

class CardView extends View {
  _generateMarkup(data) {
    return this._data
      .map((cardData, i) => {
        if (!i) {
          return this._generateMarkupCard({ cardData, firstCard: true });
        } else {
          return this._generateMarkupCard({ cardData, firstCard: '' });
        }
      })
      .join('');
  }

  _generateMarkupCard({ cardData, firstCard }) {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const date = new Date(cardData.releaseDate).toLocaleString(
      'en-US',
      options
    );

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
          <a href="/${cardData.mediaType}/${
      cardData.id
    }" class="card__image-anchor">
            <img
              src="${cardData.posterImage}"
              alt=""
            />
          </a>
        </div>
        <div class="card__content">
          <div class="card__score">${cardData.voteAverage}</div>
          <div class="card__title">
            <a href="/${cardData.mediaType}/${
      cardData.id
    }" class="card__title-anchor">${cardData.title}</a>
          </div>
          <div class="card__date">${date}</div>
        </div>
      </div>
    `;
  }
}

export default new CardView();
