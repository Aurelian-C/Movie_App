import { View } from './View';

class SelectorView extends View {
  addHandlerSelect(handler) {
    this._parentElement.addEventListener('click', e => {
      // Select clicked item
      const item = e.target.closest('.selector__item');
      if (!item) return;

      // Remove 'selected' class
      const parentEl = item.closest('.selector__container');
      const childrensEl = parentEl.querySelectorAll('.selector__item');
      childrensEl.forEach(childEl => childEl.classList.remove('selected'));

      // Add 'selected' class to clicked item
      item.classList.add('selected');

      // Get item's mediaType and pass to handler function
      const { mediaType } = item.dataset;
      handler(mediaType);
    });
  }

  _generateMarkup(data) {
    return `
      <div class="selector">
        <h3 class="selector__description">${data.title}</h3>
        <ul class="selector__container">
          ${data.items
            .map((item, i) => {
              const data = { item, firstItem: i ? '' : true };
              return this._generateMarkupItems(data);
            })
            .join('')}
        </ul>
      </div>
    `;
  }

  _generateMarkupItems({ item, firstItem }) {
    const mediaType = item.toLowerCase();
    const selected = firstItem ? 'selected' : '';

    return `
      <li class="selector__item ${selected}" data-media-type="${mediaType}">
        <h4 class="selector__title">${item}</h4>
        <div class="selector__bg"></div>
      </li>
    `;
  }
}

export default new SelectorView();
