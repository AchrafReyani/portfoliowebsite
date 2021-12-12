import React from 'react';

import '../styles/resume.css';
function Resume() {
  return (
    
    <div id="resume"class="resume-page">
    <h1 className= "resume-title">resume and programming history</h1>

    <div className='resume-box'><a href="media/Achraf Reyani resume (EN).pdf" target="_blank">
    <img src="media/resume-EN.png" alt=""/>
    </a></div>

    <div className='resume-box'>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    
  </div>
  );
}

export default Resume;