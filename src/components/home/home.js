import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="container" id="outer-container">
        <div className="home" id="page-wrap">
          <div className="home"></div>
        </div>
      </div>
    );
  }
}