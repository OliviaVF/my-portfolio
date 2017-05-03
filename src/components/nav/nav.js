import React from 'react';

const navbar = {};
navbar.brand =
  {linkTo: "/", text: "Olivia Vaughan-Fowler"};
navbar.links = [
  {linkTo: "/about", text: "About Me"},
  {linkTo: "/portfolio", text: "My Portfolio"}
];

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={ ...navbar }
  }
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavBrand linkTo={this.state.brand.linkTo} text={this.state.brand.text} />
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.state.links} />
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
