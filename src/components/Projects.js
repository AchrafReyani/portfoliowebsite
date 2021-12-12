import React, { useState } from 'react';

import '../styles/projects.css';
function Projects() {

    const [titleList,SetTitleList]=useState(['','',''])
    const [photoList,SetPhotoList]=useState(['','',''])
    const [descList,SetDescList]=useState(['','',''])
    const [gitList,SetGitList]=useState(['','',''])
    const [ytList,SetYTList]=useState(['','',''])

    const projectList = titleList.map((item,index) => {
        return (
            <div className="project-box">
            <h1>{item}</h1>
       <img className=""src={photoList[index]}/>
       <p>{descList[index]}</p>
       <a href={gitList[index]}>
       <img className=""src=''/></a>
       <a href={ytList[index]}>
       <img className=""src=''/></a>
       </div>
        )

    })
  return (
    <div id="projects"class="projects-page">
      <h1>projects</h1>
        {projectList}
    </div>
  );
}

export default Projects;