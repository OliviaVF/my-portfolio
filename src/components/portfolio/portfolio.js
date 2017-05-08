import React from 'react';
import Slider from 'react-slick';
import Scroll from 'react-scroll';

const Link       = Scroll.Link;
const Element    = Scroll.Element;

const eastenders =
  (<div><h1>Eastenders</h1><p>I rely on recommendations from those I know and trust over and above any other, but often I can’t get hold of them when I need them and I end up with lists of various establishments scrawled across bits of paper, saved on my phone, email, or some other platform. Pylon is an App to make storing and accessing recommendations a lot easier and more effective. This was certainly a far more complicated build than my first project, and was when I discovered how much I enjoyed being a developer. I used modals to display editable form data about each recommendation, which was quite fiddly. It was great to start getting to grips with the capacities of external APIs.</p><button><a href="https://pure-atoll-74725.herokuapp.com/" target="_blank">Link</a></button><button><a href="https://github.com/OliviaVF/project-2" target="_blank">Github</a></button></div>)
const pylon1 =
  (<div><h1>Pylon 1.0</h1><p>I rely on recommendations from those I know and trust over and above any other, but often I can’t get hold of them when I need them and I end up with lists of various establishments scrawled across bits of paper, saved on my phone, email, or some other platform. Pylon is an App to make storing and accessing recommendations a lot easier and more effective. This was certainly a far more complicated build than my first project, and was when I discovered how much I enjoyed being a developer. I used modals to display editable form data about each recommendation, which was quite fiddly. It was great to start getting to grips with the capacities of external APIs.</p><button><a href="https://pure-atoll-74725.herokuapp.com/" target="_blank">Link</a></button><button><a href="https://github.com/OliviaVF/project-2" target="_blank">Github</a></button></div>)
  const accommodata =
  (<div><h1>AccommoData</h1><p>Pylon 2.0 is a recommendations platform built with the same aims as Pylon 1.0, but in a new language, Additionally, users can now follow and unfollow users, and do not see anything on their feed from those they do not follow. The app has been restyled with a smoother user experience in mind, and involves more complex map functionality. The backend was built using Ruby, and the front end using Angular. The challenge was certainly building the follower/following relationships between users.</p><button><a href="https://pure-atoll-74725.herokuapp.com/" target="_blank">Link</a></button><button><a href="https://github.com/OliviaVF/project-2" target="_blank">Github</a></button></div>)
  const pylon2 =
  (<div><h1>Pylon 1.0</h1><p>Pylon 2.0 is a recommendations platform built with the same aims as Pylon 1.0, but in a new language, Additionally, users can now follow and unfollow users, and do not see anything on their feed from those they do not follow. The app has been restyled with a smoother user experience in mind, and involves more complex map functionality. The backend was built using Ruby, and the front end using Angular. The challenge was certainly building the follower/following relationships between users.</p><button><a href="https://pure-atoll-74725.herokuapp.com/" target="_blank">Link</a></button><button><a href="https://github.com/OliviaVF/project-2" target="_blank">Github</a></button></div>)

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
