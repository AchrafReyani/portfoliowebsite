import React from 'react';

import '../styles/home.css';
function Home() {
  return (
    <div class="home-page">
    <div class="titel">
      <h1>I'm Achraf, nice to meet you!</h1>
    </div>

    <div class="menu-box">

      <a  href="#projects">
      <button class="menu-button"><h2>projects</h2></button></a>

      <a href="#resume">
      <button class="menu-button"><h2>resume</h2></button></a>

      <a href="#contact">
      <button class="menu-button"><h2>contact</h2></button></a>
    </div>
  </div>
  );
}

export default Home;