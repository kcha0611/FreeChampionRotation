const FreeChampApiUtil = require('../utils/free_champ_api_util.js');
const ChampionConstants = require('../constants/champion_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ChampApiUtil = require('../utils/champ_api_util.js');

const FreeChampActions = {
  freeChampions() {
    FreeChampApiUtil.freeChampions(this.receiveChampions);
  },
  receiveChampions(champions) {
    AppDispatcher.dispatch({
      actionType: ChampionConstants.FREE_CHAMPS_RECEIVED,
      champions: champions
    })
  }
}

module.exports = FreeChampActions;
