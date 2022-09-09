import { View } from './View';

class SearchView extends View {
  _generateMarkup() {
    return `
      <div class="search__container">
        <div class="search__content">
          <h2 class="search__title">Welcome.</h2>
          <span class="search__text"
            >Millions of movies, TV shows and people to discover. Explore
            now.</span
          >
        </div>
        <form class="search__form">
          <input
            type="text"
            class="search__input"
            placeholder="Search for a movie, TV show, person......"
          />
          <button class="search__button" type="submit">Search</button>
        </form>
      </div>
    `;
  }
}

export default new SearchView();
