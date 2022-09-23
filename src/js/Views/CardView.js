import placeholderImage from '../../img/placeholder_content_img1.jpg';

class CardView {
  _data;
  _widgetContainer = document.querySelector('.widget');

  addOverlayFunctionality(root) {
    root.addEventListener('click', e => {
      // Handle clicks on overlay
      const selectOverlay = e.target.classList.contains('card__overlay');
      if (selectOverlay) {
        e.target.classList.add('hidden');
      }

      // Handle click on button
      const btn = e.target.closest('.card__circle');
      if (!btn) return;
      // Positioning the card widget
      const btnPosition = btn.getBoundingClientRect();
      const bodyY = Math.abs(document.body.getBoundingClientRect().y);
      const btnY = btnPosition.y;
      this._widgetContainer.style.top = `${bodyY + btnY}px`;
      this._widgetContainer.style.left = `${btnPosition.left}px`;
      this._widgetContainer.classList.remove('hidden');

      const card = btn.closest('.card');
      const cardOverlay = card.querySelector('.card__overlay');
      cardOverlay.classList.remove('hidden');

      const allCardsOverlay = card
        .closest('.cards__container')
        .querySelectorAll('.card__overlay');

      [...allCardsOverlay].forEach(overlay => {
        if (cardOverlay !== overlay) {
          overlay.classList.add('hidden');
        }
      });
    });
  }

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

  renderCard(root, data) {
    this._data = data;
    const markup = this._generateMarkupCard(data);
    root.textContent = '';
    root.insertAdjacentHTML('beforeend', markup);
  }

  renderPlaceholder(root) {
    const markup = this._generateMarkupPlaceholders();
    root.textContent = '';
    root.insertAdjacentHTML('beforeend', markup);
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
        <div class="card__overlay hidden"></div>
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
      <div class="placeholders">
        <div class="placeholders__container">
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
      </div>
    `;
  }
}

export default new CardView();
