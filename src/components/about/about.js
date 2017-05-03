import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


export default class About extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="about">
          <h1>About Me</h1>
          <div className="words">
            <p>After completing a degree in Philosophy, I spent 3 and a half years working for various start ups in wide-reaching, operational roles. I ended up project managing several tech builds which led to a fascination with development.</p>
            <p>I decided to take the General Assembly immersive web development course because of my desire to start doing the building myself, no longer wanting to look from the outside in.</p>
            <p>My brain is creative and scientific in equal measures, and web development truly satisfies all the different ways I like to think and do.</p>
            <p>I am currently looking to join a relatively small, friendly, dynamic team as a full stack developer, building something that positively affects society.</p>
          </div>

          <a href="https://github.com/OliviaVF" target="_blank">
            <div className="github"></div>
          </a>

          <a href="https://www.linkedin.com/in/olivia-vaughan-fowler/" target="_blank">
            <div className="linkedin"></div>
          </a>

        </div>
      </div>
    );
  }
};
