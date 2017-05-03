import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import './css/layout.css';
import About from './components/about/about';
import {BrowserRouter as Route} from 'react-router-dom';;

ReactDOM.render(
  <div>
    <Layout />
    <Route path="/about" component={About} />
  </div>,
  document.getElementById('root')
);
