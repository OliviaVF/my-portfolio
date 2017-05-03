import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import NavBar from './components/nav/nav';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './css/layout.css';

class App extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
          {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </App>
  </Router>,
  document.getElementById('root')
);
