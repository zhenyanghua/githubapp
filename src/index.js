import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import App from './App';
import Projects from "./Projects/Projects";
import Project from "./Projects/Project";
import Home from "./Home/Home";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="projects" component={Projects} shuffle={true}>
        <Route path="project/:projectId" component={Project}/>
      </Route>
      {/*<Route path="*" component={NoMatch}/>*/}
    </Route>
  </Router>,
  document.getElementById('root')
);
