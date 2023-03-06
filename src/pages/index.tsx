import React, { Component, useRef, useState } from 'react';
import NavBar from '../components/navbar';

class HomePage extends Component {
  render() {
    return (
      <div id="HomePage">
        <NavBar />
        <div id="content-container">
          <p className="intro-text">Hi, my name is</p>
          <h1 className="intro-text">Kassidy</h1>
          <h2>I build things for the web.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            quis consequat mauris. Sed blandit eros tincidunt mauris aliquam
            tristique. Duis sagittis egestas mollis. Morbi tincidunt cursus odio
            vel tincidunt. Curabitur ac magna pretium, maximus arcu non, maximus
            dui. Mauris hendrerit odio in nisl scelerisque, at posuere nibh
            pulvinar. Aliquam enim massa, luctus non nisl in, fringilla posuere
            odio. Phasellus sagittis dapibus nisi, venenatis laoreet risus
            luctus vel.
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
