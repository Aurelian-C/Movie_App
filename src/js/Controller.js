import * as Model from './Model';
import CardView from './Views/CardView';

const controlTrendings = async function () {
  try {
    await Model.fetchCardDates('trending', 'all', 'week');
    CardView.render(Model.state.trendings);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlTrendings();
};
init();
