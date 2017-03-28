var React = require('react');
var ReactDOM = require('react-dom');
var {IndexRoute, Route, Router, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>React Final Boilerplate</p>,
  document.getElementById('app')
);
