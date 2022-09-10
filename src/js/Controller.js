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

const controlTest = async function () {
  try {
    const sectionID = 'section-test';
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
  controlTest();
};
init();
