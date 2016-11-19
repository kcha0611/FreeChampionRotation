const ChampionConstants = require('../constants/champion_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ChampApiUtil = require('../utils/champ_api_util.js');

const ChampionActions = {
  fetchChampions() {
    ChampApiUtil.fetchChampions(this.receiveChampions);
  },
  receiveChampions(champions) {
    AppDispatcher.dispatch({
      actionType: ChampionConstants.CHAMPS_RECEIVED,
      champions: champions
    })
  }
}

module.exports = ChampionActions;
