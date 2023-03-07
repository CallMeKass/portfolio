import React, { Component, useRef, useState } from 'react';
import NavBar from '../../components/navbar';
import './home.scss';

class HomePage extends Component {
  render() {
    return (
      <div id="HomePage">
        <NavBar />
        <div id="content-container">
          <div id="main-content">
            <div id="social-content">Social Content</div>

            <div id="text-container">
              <h1 className="intro-text"> Hi, I'm Kassidy </h1>
              <h2>I build things for the web.</h2>
              <p>
                I'm a creative professional with several years of experience in
                Web Development and Software Engineering. I have designed and
                built many full stack applications using a variety of libraries
                and frameworks. I am passionate about creating, lighting fast,
                intuitive, and beautiful applications for the web.
              </p>
              <div id="btn-container">
                <button>View Projects</button>
                <button className="btn-secondary">View Resume</button>
                <button className="btn-secondary">Contact Me</button>
              </div>
            </div>
          </div>
          <div id="right-content">Some image</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
