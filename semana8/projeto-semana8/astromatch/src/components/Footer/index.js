import heartIcon from './heartIcon.png';
import deleteIcon from './deleteIcon.png';
import FooterBar from './styled';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person'

export const Footer = (props) => {

  const [match, setMatch] = useState()

  const [list, setList] = useState()
  
  const postMatch = () => {
      let body = {
        id: props.person.id,
        choice: match
      }
      console.log(body)
      axios 
      .post(baseURL, body)
      .then(res => {
        setList(res.data)
        console.log(list)
      })
      .catch(err => {
        console.log(err)
      });
    };

    const handleHeart = () => {
      setMatch (true)
    };

    const handleX = () => {
      setMatch (false)
    };

    return (    
    <FooterBar>
      <input 
      type= 'image' 
      src={deleteIcon} 
      onClick={handleX}      
      />
            <input 
      type= 'image' 
      src={heartIcon}   
      onClick={handleHeart}   
      />
    </FooterBar>
    );
}

export default Footer;