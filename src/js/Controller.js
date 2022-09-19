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
    const root = document.getElementById('section-popularity');
    CardView.renderPlaceholder(root);
    SelectorView.render(Model.state.popular.selector);
    await Model.fetchPopular('movie');
    SelectorView.addHandlerSelect(controlPopularitySelector);
    CardView.renderCard(root, Model.state.popular.cards);
    CardView.toggleFadeInOut();
  } catch (err) {
    console.log(err);
  }
};

const controlPopularitySelector = async function (mediaType) {
  try {
    const root = document.getElementById('section-popularity');
    CardView.renderPlaceholder(root);
    await Model.fetchPopular(mediaType);
    CardView.renderCard(root, Model.state.popular.cards);
    CardView.toggleFadeInOut();
  } catch (err) {
    console.log(err);
  }
};

// Trendings
const controlTrendings = async function () {
  try {
    const root = document.getElementById('section-trendings');
    CardView.renderPlaceholder(root);
    SelectorView.render(Model.state.trendings.selector);
    await Model.fetchTrendings('trending', 'all', 'day');
    SelectorView.addHandlerSelect(controlTrendingsSelector);
    CardView.renderCard(root, Model.state.trendings.cards);
    CardView.toggleFadeInOut();
  } catch (err) {
    console.log(err);
  }
};

const controlTrendingsSelector = async function (timeWindow) {
  try {
    const root = document.getElementById('section-trendings');
    CardView.renderPlaceholder(root);
    await Model.fetchTrendings('trending', 'all', timeWindow);
    CardView.renderCard(root, Model.state.trendings.cards);
    CardView.toggleFadeInOut();
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlSearchView();
  controlPopularity();
  // controlTrendings();
};
init();
