import React from 'react';

export default class Portfolio extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="portfolio">
          <h1>My Portfolio</h1>

          <a href="https://radiant-bastion-75576.herokuapp.com/" target="_blank">
            <div className="pylon2"></div>
          </a>

          <a href="https://mysterious-beach-72095.herokuapp.com/" target="_blank">
            <div className="accommodata"></div>
          </a>

          <a href="https://pure-atoll-74725.herokuapp.com/" target="_blank">
            <div className="pylon1"></div>
          </a>

          <a href="https://young-tundra-42544.herokuapp.com/" target="_blank">
            <div className="eastenders"></div>
          </a>

        </div>
      </div>
    );
  }
};
