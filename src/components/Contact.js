import React, { useState } from 'react';

import '../styles/contact.css';
function Contact() {
    const [iconList,SetIconList]=useState(['icons/linkedin.png','icons/git.png','icons/mail.png','icons/phone.png'])
    const [linkList,SetLinkList]=useState(['https://www.linkedin.com/in/achraf-reyani-17bab9153/','https://github.com/AchrafRe','mailto: achrafreyani99@gmail.com','https://www.youtube.com/watch?v=dQw4w9WgXcQ'])
    const [textList,SetTextList]=useState(['Achraf Reyani','@AchrafRe','achrafreyani99@gmail.com','+31687252097'])
    
    const contactList = iconList.map((item,index) => {
       return(<div className="contact-box">
       <a href={linkList[index]}>
       <img className="contact-button"src={item}/></a>
       <p>{textList[index]}</p>
       </div>) 
    })
    
    return (
    <div className="contact-page-outer">
    <div id="contact"className="contact-page-inner">
    <h1>contact me!</h1>
    {contactList}
    </div> 
    </div>
  );
}

export default Contact;