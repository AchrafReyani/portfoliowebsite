import React from 'react';

import '../styles/home.css';
function Home() {
  return (
    <div className="home-page">
    <div className="titel">
    </div>


    <div className="photo-box">
    <img src="./media/home-image.png"/>
    </div>

    <div className="menu-box">
    <h1>I'm Achraf, nice to meet you!</h1>
      <a  href="#projects">
      <button className="menu-button"><h2>projects</h2></button></a>

      <a href="#resume">
      <button className="menu-button"><h2>resume</h2></button></a>

      <a href="#contact">
      <button className="menu-button"><h2>contact</h2></button></a>
    </div>



  </div>
  );
}

export default Home;