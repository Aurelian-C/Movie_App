export class View {
  _parentElement;
  _sectionContainer;
  _data;

  render(sectionContainerID, parentElementID, data) {
    this._sectionContainer = document.getElementById(sectionContainerID);
    this._parentElement = this._append(parentElementID);
    this._data = data;
    const markup = this._generateMarkup(this._data);
    this._cleanContainer();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  update(sectionElement, data) {
    this._parentElement = sectionElement.querySelector('.cards__container');
    this._data = data;
    const markup = this._generateMarkup(this._data);
    this._cleanContainer();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _append(id) {
    const element = document.createElement('div');
    element.classList.add(id);
    this._sectionContainer.append(element);
    return element;
  }

  _cleanContainer() {
    this._parentElement.textContent = '';
  }

  renderSpinner() {
    const markup = `<div class="loader"></div>`;
    this._cleanContainer();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}
