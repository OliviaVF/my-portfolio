import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Github from './github.png';
import Linkedin from './linkedin.png';

var About = React.createClass({
  render: function(){
    return(
      <div>
        <p>After completing a degree in Philosophy, I spent 3 and a half years working for various start ups in wide-reaching, operational roles. I ended up project managing several tech builds which led to a fascination with development. I joined WDI because of my desire to start doing the building myself, no longer wanting to look from the outside in. My brain is creative and scientific in equal measures, and web development truly satisfies all the different ways I like to think and do. After this incredible learning experience, I would like to join a small, friendly, dynamic team as a full stack developer, building something that positively affects society.</p>


        <a href="https://github.com/OliviaVF" target="_blank">
          <div>
            <img src={Github} alt="github" className="github"/>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/olivia-vaughan-fowler/" target="_blank">
          <div>
            <img src={Linkedin} alt="linkedin" className="linkedin"/>
          </div>
        </a>

      </div>
    );
  }
});

ReactDOM.render(
  <About />,
  document.getElementById("about")
);
