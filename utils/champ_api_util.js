const ChampApiUtil = {
  fetchChampions: function(cb) {
    $.ajax({
      url: `https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=tags&champData=image&api_key=RGAPI-eb6bf24a-2051-45d2-af09-9256d6431a06`,
      method: "GET",
      success: function(champions) {
        cb(champions)
      }
    })
  }
}

module.exports = ChampApiUtil;
