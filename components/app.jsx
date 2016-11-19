const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = require('react-router').hashHistory;
const ChampionStore = require('../stores/champion_store.js');
const FreeChampActions = require('../actions/free_champ_actions.js');
const ChampIndexItem = require('./champ_index_item.jsx');
const ChampStore = require('../stores/champ_store.js');
const ChampionActions = require('../actions/champion_actions');

const App = React.createClass({
  getInitialState: function() {
    return {
      freeChampIDS: [],
      champions: [],
      champInfo: ChampStore.getInfo()
    };
  },
  componentDidMount: function() {
    this.championListener = ChampionStore.addListener(this._onFreeReceived)
    this.champListener = ChampStore.addListener(this._onChampReceived)
    FreeChampActions.freeChampions();
    ChampionActions.fetchChampions();
  },
  componentWillUnmount: function() {
    this.championListener.remove()
  },
  _onFreeReceived: function() {
    this.setState({freeChampIDS: ChampionStore.all()});
  },
  _onChampReceived: function() {
    this.setState({champions: ChampStore.all()})
  },
  render() {
    let that = this;
    return (
      <div className="champ-wrap">
        {this.state.freeChampIDS.map(function(obj) {
          return (
          <div className="inner-champ-wrap">
            <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + that.state.champions[obj.id] + "_0.jpg"} className="champ-img"/>
              <p className="champ-info">{that.state.champions[obj.id]}</p>
              <p className="champ-info">{that.state.champInfo[obj.id]}</p>
          </div>
          )
        })}
      </div>
    )
  }
});

module.exports = App;
