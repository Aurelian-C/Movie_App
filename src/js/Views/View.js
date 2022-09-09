export class View {
  _parentElement;
  _data;

  render(element, data) {
    this._parentElement = element;
    this._data = data;
    const markup = this._generateMarkup(this._data);
    this._cleanContainer();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
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
