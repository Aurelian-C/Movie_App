import * as Model from './Model';
import SearchView from './Views/SearchView';
import SelectorView from './Views/SelectorView';
import MobileMenu from './Views/MobileMenu';
import HeaderView from './Views/HeaderView';
import CardView from './Views/CardView';

const controlSearchView = function () {
  SearchView.render();
};

// Popularity
const controlPopularity = async function () {
  try {
    const rootSelector = document.getElementById('popularity-selector');
    const rootCards = document.getElementById('popularity-cards');
    CardView.renderPlaceholder(rootCards);
    SelectorView.render(rootSelector, Model.state.popular.selector);
    await Model.fetchPopular('movie');
    SelectorView.addHandlerSelect(rootSelector, controlPopularitySelector);
    CardView.renderCard(rootCards, Model.state.popular.cards);
    CardView.toggleFadeInOut(rootCards);
  } catch (err) {
    console.log(err);
  }
};

const controlPopularitySelector = async function (mediaType) {
  try {
    const rootCards = document.getElementById('popularity-cards');
    CardView.renderPlaceholder(rootCards);
    await Model.fetchPopular(mediaType);
    CardView.renderCard(rootCards, Model.state.popular.cards);
    CardView.toggleFadeInOut(rootCards);
  } catch (err) {
    console.log(err);
  }
};

// Trendings
const controlTrendings = async function () {
  try {
    const rootSelector = document.getElementById('trendings-selector');
    const rootCards = document.getElementById('trendings-cards');
    CardView.renderPlaceholder(rootCards);
    SelectorView.render(rootSelector, Model.state.trendings.selector);
    await Model.fetchTrendings('trending', 'all', 'day');
    SelectorView.addHandlerSelect(rootSelector, controlTrendingsSelector);
    CardView.renderCard(rootCards, Model.state.trendings.cards);
    CardView.toggleFadeInOut(rootCards);
  } catch (err) {
    console.log(err);
  }
};

const controlTrendingsSelector = async function (timeWindow) {
  try {
    const rootCards = document.getElementById('trendings-cards');
    CardView.renderPlaceholder(rootCards);
    await Model.fetchTrendings('trending', 'all', timeWindow);
    CardView.renderCard(rootCards, Model.state.trendings.cards);
    CardView.toggleFadeInOut(rootCards);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlSearchView();
  controlPopularity();
  controlTrendings();
};
init();
