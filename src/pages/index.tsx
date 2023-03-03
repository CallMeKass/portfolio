import React, { Component, useRef, useState } from 'react';
import NavBar from '../components/navbar';

class HomePage extends Component {
  render() {
    return (
      <div id="HomePage">
        <NavBar />
        <div id="content-container">
          <h1>Jakey Jake</h1>
          <h2>
            he is so
            <span className="jake"> wow</span>
          </h2>
          <p>also he's my boyfriend and I love him</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
