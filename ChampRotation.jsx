const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = require('react-router').hashHistory;
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const App = require('./components/app.jsx');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>
)


document.addEventListener("DOMContentLoaded", function(){
  let root = document.getElementById("root");
  ReactDOM.render(routes, root);
});
