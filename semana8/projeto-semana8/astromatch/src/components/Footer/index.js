import heartIcon from './heartIcon.png';
import deleteIcon from './deleteIcon.png';
import FooterBar from './styled';
import React, { useState, useEffect } from 'react';

export const Footer = (props) => {
    return (    
    <FooterBar>
      <input 
        type= 'image' alt="Icone de fechar"
        src={deleteIcon} 
        onClick={props.unlike}      
      />
      <input 
        type= 'image' alt="Icone de gostar"
        src={heartIcon}   
        onClick = {props.like}
      />
    </FooterBar>
    );
}

export default Footer;