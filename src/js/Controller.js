import * as Model from './Model';
import CardView from './Views/CardView';
import SelectorView from './Views/SelectorView';

const controlTrendings = async function () {
  try {
    await Model.fetchCardDates('trending', 'all', 'week');
    SelectorView.render(
      document.getElementById('trendings-selector'),
      Model.state.trendings.selector
    );
    SelectorView.addHandlerSelect(controlSelector);
    CardView.render(
      document.getElementById('trendings-cards'),
      Model.state.trendings.cards
    );
  } catch (err) {
    console.log(err);
  }
};

const controlSelector = async function (media) {
  try {
    await Model.fetchCardDates('trending', media, 'day');
    CardView.render(
      document.getElementById('trendings-cards'),
      Model.state.trendings.cards
    );
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlTrendings();
};
init();
