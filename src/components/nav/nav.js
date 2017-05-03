import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class NavBar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavBrand text={this.props.brand.text} />
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links} />
          </div>
        </div>
      </nav>
    );
  }
};

class NavBrand extends React.Component {
  render() {
    return(
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    );
  }
};

class NavMenu extends React.Component {
  render() {
    var links = this.props.links.map(function(link){
      return(
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      });
    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    );
  }
};

class NavLink extends React.Component {
  render() {
    return(
      <li className={(this.props.active ? "active" : "")}><a href={this.props.linkTo}>{this.props.text}</a></li>
    );
  }
};

// set data
var navbar = {};
navbar.brand =
  {text: "Olivia Vaughan-Fowler"};
navbar.links = [
  {linkTo: "/about", text: "About Me"},
  {linkTo: "#", text: "Portfolio"}
];

ReactDOM.render(
  <NavBar {...navbar} />,
  document.getElementById("navbar")
);
