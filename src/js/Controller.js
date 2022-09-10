import * as Model from './Model';
import CardView from './Views/CardView';
import SearchView from './Views/SearchView';
import SelectorView from './Views/SelectorView';

const controlSearchView = function () {
  SearchView.render('search', 'search');
};

const controlTrendings = async function () {
  try {
    const rootID = 'section-trendings';
    await Model.fetchCardDates('trending', 'all', 'week');
    SelectorView.render(
      rootID,
      'trendings-selector',
      Model.state.trendings.selector
    );
    SelectorView.addHandlerSelect(controlSelector);
    CardView.render(rootID, 'cards', Model.state.trendings.cards);
  } catch (err) {
    console.log(err);
  }
};

const controlSelector = async function (media, sectionElement) {
  try {
    await Model.fetchCardDates('trending', media, 'day');
    CardView.update(sectionElement, Model.state.trendings.cards);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlSearchView();
  controlTrendings();
};
init();
