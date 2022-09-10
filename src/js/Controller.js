import * as Model from './Model';
import CardView from './Views/CardView';
import SearchView from './Views/SearchView';
import SelectorView from './Views/SelectorView';

const controlSearchView = function () {
  SearchView.render('search', 'search');
};

const controlTrendings = async function () {
  try {
    const sectionID = 'section-trendings';
    await Model.fetchCardDates('trending', 'all', 'week');
    SelectorView.render(
      sectionID,
      'trendings-selector',
      Model.state.trendings.selector
    );
    SelectorView.addHandlerSelect(controlSelector);
    CardView.render(sectionID, 'cards', Model.state.trendings.cards);
  } catch (err) {
    console.log(err);
  }
};

const controlSelector = async function (media) {
  try {
    await Model.fetchCardDates('trending', media, 'day');
    CardView.update('trendings-cards', Model.state.trendings.cards);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlSearchView();
  controlTrendings();
};
init();
