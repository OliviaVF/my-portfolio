import React from 'react';
import {Link} from 'react-router-dom';
import { scaleRotate as Menu } from 'react-burger-menu';

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      name: 'Olivia Vaughan-Fowler',
      isOpen: false,
    }
    this.isMenuOpen = this.isMenuOpen.bind(this);
  }
  isMenuOpen(){
    return this.state.isOpen;
  };

  render(){
    return(
      <Menu pageWrapId={ "page-wrap" } isOpen={false} onStateChange={ this.isMenuOpen} outerContainerId={ "outer-container" }>
       <Link id="home" className="menu-item" to="/home">Home</Link>
       <Link id="about" className="menu-item" to="/about">About</Link>
       <Link id="contact" className="menu-item" to="/portfolio">My Portfolio</Link>
     </Menu>
    )
  }
}
