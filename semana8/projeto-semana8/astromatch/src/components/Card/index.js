import React, {useState, useEffect} from 'react'
import CardBox from './styled';

export const Card = (props) => {
         
    return (
    <>{props.person &&         
        <CardBox>
            <img src={props.person.photo}/>
            <h2>{props.person.name},{props.person.age}</h2>
            <p>{props.person.bio}</p>
        </CardBox>}
    </>
    );
}

export default Card;