const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const ChampionConstants = require('../constants/champion_constants.js');

let ChampStore = new Store(AppDispatcher);

let _champions = {};
let _champInfo = {};
ChampStore.all = function() {
  console.log(_champions);
  return _champions;
}

ChampStore.addChampions = function(champions) {
  _champions = {};
  Object.values(champions).forEach((champ) => {
    if (champ.name == "Vel'Koz") {
      champ.name = "Velkoz"
    }
    else if (champ.name == "Wukong") {
      champ.name = "MonkeyKing";
    }
    _champions[champ.id] = champ.name.replace(" ", "");
    _champInfo[champ.id] = champ.title
  });
}

ChampStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ChampionConstants.CHAMPS_RECEIVED:
      this.addChampions(payload.champions.data);
      this.__emitChange();
      break;
  }
}

ChampStore.getInfo = function() {
  return _champInfo
}

module.exports = ChampStore;
