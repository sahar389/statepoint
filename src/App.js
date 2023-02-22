import React from 'react';
import { Component } from 'react';
import './App.css';

import image from './Capture.png';

class App extends Component {
  
    state = { 
      profile:{
      fullName:'Sahar Amami',
      bio:'Femme ingénieur chercheuse responsable motivée et rigoureuses, passionnée par les nouvelles technologies avec des bonnes capacités d’analyse et de synthèse. Active dans la vie associative en participant aux plusieurs événements et projets.',
      profession: 'Ingenieur ',
      image,
      
     
    },
    show: false,
    timer: 0,
  };
    handleClick  = () =>  {
      this.setState({ show: !this.state.show });
    };
    componentDidMount =()=> {
      console.log("run componentDidMount");
      this.intervalId = setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000);
      console.log(this.intervalId);
    };


  render() {
    return (
      <div className="position app">
        <div className="box">
          {this.state.show && (
            <div className="information">
              <div className="position Img">
                <img src={this.state.profile.image} alt="" />
              </div>
              <section className="position">
                <h1>{this.state.profile.fullName}</h1>
                <h3>{this.state.profile.profession}</h3>
                <p>{this.state.profile.bio}</p>
                <div className="count">Count: {this.state.timer} sec</div>
              </section>
            </div>
          )}
          <button type="button" className="butn" onClick={this.handleClick}>
            {this.state.show ? "Hide" : "Show"} Me
          </button>
        </div>
      </div>
    );
  }
}

export default App