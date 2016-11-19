const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const ChampionConstants = require('../constants/champion_constants.js');

let ChampionStore = new Store(AppDispatcher);

let _freeChampions = {};

ChampionStore.all = function() {
  return Object.keys(_freeChampions).sort().map( (champ) => {
    return _freeChampions[champ];
  });
}

ChampionStore.addChampions = function(champions) {
  _freeChampions = {};
  let freeChampions = [];
  champions.map((champ) => {
    if (champ.freeToPlay == true) {
      return freeChampions.push(champ)
    }
  })
  freeChampions.forEach((champ) => {
    _freeChampions[champ.id] = champ;
  });
}

ChampionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ChampionConstants.FREE_CHAMPS_RECEIVED:
      ChampionStore.addChampions(payload.champions.champions);
      this.__emitChange();
      break;
  }
}

module.exports = ChampionStore;
