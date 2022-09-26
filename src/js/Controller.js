import * as Model from './Model';
import SearchView from './Views/SearchView';
import SelectorView from './Views/SelectorView';
import DropdownMenu from './Views/DropdownMenu';
import BodyView from './Views/BodyView';
import HeaderView from './Views/HeaderView';
import CardView from './Views/CardView';
import { promiseDelay } from './Helpers';
import { PROMISE_DELAY } from './Config';

const controlSearchView = function () {
  SearchView.render();
};

// Search input
const controlSearchHints = async function () {
  try {
    if (!Model.state.trendings.searchHints.length) {
      await Model.fetchSearchHints('trending', 'all', 'day');
    }
    HeaderView.renderHints(Model.state.trendings.searchHints);
  } catch (err) {
    console.log(err);
  }
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
    CardView.addOverlayFunctionality(rootCards);
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
    await promiseDelay(PROMISE_DELAY);
    await Model.fetchTrendings('trending', 'all', 'day');
    SelectorView.addHandlerSelect(rootSelector, controlTrendingsSelector);
    CardView.renderCard(rootCards, Model.state.trendings.cards);
    CardView.toggleFadeInOut(rootCards);
    CardView.addOverlayFunctionality(rootCards);
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
  HeaderView.addHandlerHints(controlSearchHints);
};
init();
