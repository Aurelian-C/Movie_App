import placeholderImage from '../../img/placeholder_content_img1.jpg';

class CardView {
  _parentElement;
  _data;

  toggleFadeInOut() {
    const cards = this._parentElement.querySelector('.cards');
    const cardsContainer =
      this._parentElement.querySelector('cards__container');
    const firstCard = this._parentElement.querySelector('.card--first');

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

  renderCard(root, data) {
    this._data = data;

    if (!this._parentElement) {
      const parentElement = document.createElement('div');
      this._parentElement = parentElement;
      root.append(parentElement);
    }

    const markup = this._generateMarkupCard(data);
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  renderPlaceholder(root) {
    if (!this._parentElement) {
      const parentElement = document.createElement('div');
      this._parentElement = parentElement;
      root.append(parentElement);
    }

    const markup = this._generateMarkupPlaceholders();
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _clear() {
    this._parentElement.textContent = '';
  }

  _generateMarkupCard(data) {
    return `
      <div class="cards">
        <div class="cards__container">
        ${data
          .map((cardData, i) => {
            if (!i) {
              return this._generateMarkupCardItems({
                cardData,
                firstCard: true,
              });
            } else {
              return this._generateMarkupCardItems({ cardData, firstCard: '' });
            }
          })
          .join('')}
        </div>
      </div>
      `;
  }

  _generateMarkupCardItems({ cardData, firstCard }) {
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

  _generateMarkupPlaceholders() {
    return `
      <div class="placeholders__container">
        <div class="placeholder placeholder--first">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
        <div class="placeholder">
          <div class="placeholder__image">
            <img
              src="${placeholderImage}"
              alt="Placeholder image"
            />
          </div>
          <div class="placeholder__content">
            <div class="placeholder__score">NR</div>
          </div>
        </div>
      </div>
    `;
  }
}

export default new CardView();
