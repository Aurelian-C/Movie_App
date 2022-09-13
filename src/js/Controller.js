import * as Model from './Model';
import CardView from './Views/CardView';
import SearchView from './Views/SearchView';
import SelectorView from './Views/SelectorView';
import MobileMenu from './Views/MobileMenu';
import HeaderView from './Views/HeaderView';

const controlSearchView = function () {
  SearchView.render('search', 'search');
};

// Popularity
const controlPopularity = async function () {
  try {
    const rootID = 'section-popularity';
    const parentElementID = 'cards';

    await Model.fetchPopular('movie');

    SelectorView.render(
      rootID,
      'popularity-selector',
      Model.state.popular.selector
    );
    SelectorView.addHandlerSelect(controlPopularitySelector);

    CardView.render(rootID, parentElementID, Model.state.popular.cards);
    CardView.toggleFadeInOut();
  } catch (err) {
    console.log(err);
  }
};

const controlPopularitySelector = async function (mediaType, sectionElement) {
  try {
    await Model.fetchPopular(mediaType);
    CardView.update(sectionElement, Model.state.popular.cards);
  } catch (err) {
    console.log(err);
  }
};

// Trendings
const controlTrendings = async function () {
  try {
    const rootID = 'section-trendings';
    const parentElementID = 'cards';

    await Model.fetchTrendings('trending', 'all', 'day');

    SelectorView.render(
      rootID,
      'trendings-selector',
      Model.state.trendings.selector
    );
    SelectorView.addHandlerSelect(controlTrendingsSelector);

    CardView.render(rootID, parentElementID, Model.state.trendings.cards);
    CardView.toggleFadeInOut();
  } catch (err) {
    console.log(err);
  }
};

const controlTrendingsSelector = async function (timeWindow, sectionElement) {
  try {
    await Model.fetchTrendings('trending', 'all', timeWindow);
    CardView.update(sectionElement, Model.state.trendings.cards);
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
