import React from 'react';
import Slider from 'react-slick';
import Scroll from 'react-scroll';

const Link       = Scroll.Link;
const Element    = Scroll.Element;

const eastenders =
  (<div><h1>Eastenders Top Trumps</h1><p>This is a soap opera twist on the classic card game, based on my love of Eastenders, and a desire to share the complexities of the characters with others, via a point scoring system. It is not the most serious of builds, and the ‘on-load’ theme tune can get slightly irritating. But it’s quite fun. I spent a good four hours working out how to get it looking like cards were sliding from the losing pack to winning pack, and would like to try and now get a ‘card deal’ animation working on game load.</p><button><a href="https://young-tundra-42544.herokuapp.com/" target="_blank">Link</a></button><button><a href="https://github.com/OliviaVF/project-1" target="_blank">Github</a></button></div>)
const pylon1 =
  (<div><h1>Pylon 1.0</h1><p>I rely on recommendations from those I know and trust over and above any other, but often I can’t get hold of them when I need them and I end up with lists of various establishments scrawled across bits of paper, saved on my phone, email, or some other platform. Pylon is an App to make storing and accessing recommendations a lot easier and more effective. This was certainly a far more complicated build than my first project, and was when I discovered how much I enjoyed being a developer. I used modals to display editable form data about each recommendation, which was quite fiddly. It was great to start getting to grips with the capacities of external APIs.</p><button><a href="https://pure-atoll-74725.herokuapp.com/" target="_blank">Link</a></button><button><a href="https://github.com/OliviaVF/project-2" target="_blank">Github</a></button></div>)
  const accommodata =
  (<div><h1>AccommoData</h1><p>AccommoData takes real time submissions from users to map the density of homelessness in relation to the resources available in any given area of London. It is the only app to house a comprehensive list of these resources, using an API we built from scratch.  It is the first of its kind, and I believe it has great scope. The hardest part was working out how to stop duplicate data submissions within a particular area, and then represent the averages within that area.  The next step is to try and build it in React and integrate some more interesting data visualization.</p><button><a href="https://mysterious-beach-72095.herokuapp.com" target="_blank">Link</a></button><button><a href="https://github.com/OliviaVF/WDI25-Project-3-" target="_blank">Github</a></button></div>)
  const pylon2 =
  (<div><h1>Pylon 2.0</h1><p>Pylon 2.0 is a recommendations platform built with the same aims as Pylon 1.0, but in a new language, Additionally, users can now follow and unfollow users, and do not see anything on their feed from those they do not follow. The app has been restyled with a smoother user experience in mind, and involves more complex map functionality. The backend was built using Ruby, and the front end using Angular. The challenge was certainly building the follower/following relationships between users.</p><button><a href="https://radiant-bastion-75576.herokuapp.com " target="_blank">Link</a></button><button><a href="https://github.com/OliviaVF/project-4-frontend" target="_blank">Frontend</a></button><button><a href="https://github.com/OliviaVF/project-4-api" target="_blank">Backend</a></button></div>)

export default class SimpleSlider extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      info: '',
      clicked: ''
    }
    this.eastenders = this.eastenders.bind(this);
    this.pylon1 = this.pylon1.bind(this);
    this.accommodata = this.accommodata.bind(this);
    this.pylon2 = this.pylon2.bind(this);
    this.clear = this.clear.bind(this);
  }
  clear(){
    this.setState({info: '', clicked: ''});
  }

  eastenders(){
    this.setState({info: eastenders, clicked: 'info'});
  }
  pylon1(){
    this.setState({info: pylon1, clicked: 'info'});
  }
  accommodata(){
    this.setState({info: accommodata, clicked: 'info'});
  }
  pylon2(){
    this.setState({info: pylon2, clicked: 'info'});
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.clear
    };
    return (
      <div className="container" id="outer-container">
      <div className="portfolio" id="page-wrap">
      <Slider {...settings}>
        <Link className="eastenders" to="info" onClick={this.eastenders} spy={true} smooth={true} duration={500}></Link>
        <Link to="info" onClick={this.pylon1} className="pylon1" spy={true} smooth={true} duration={500}></Link>
        <Link className="accommodata" to="info" onClick={this.accommodata} spy={true} smooth={true} duration={500}></Link>
        <Link className="pylon2" to="info" onClick={this.pylon2} spy={true} smooth={true} duration={500}></Link>
      </Slider>
      <Element name="info" className={this.state.clicked}>
        {this.state.info}
      </Element>
      </div>
      </div>
    );
  }
}
