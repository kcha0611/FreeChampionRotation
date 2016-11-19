const FreeChampApiUtil = {
  freeChampions: function(cb) {
    $.ajax({
      url: 'https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key=RGAPI-3b0d1143-16de-4c20-b48b-2f18d432e585',
      method: 'GET',
      success: function(champions) {
        cb(champions)
      }
    })
  }
}

module.exports = FreeChampApiUtil;
