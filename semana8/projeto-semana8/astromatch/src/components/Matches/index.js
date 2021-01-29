import React from 'react'
import MatchesList from './styled';


export const Matches = (props) => {
         console.log(props.list.matches)  


    return (
    <>{props.person &&         
        <MatchesList>
            {/* <img src={props.list.photo} alt={props.list.name}/>
            <h2>{props.list.name}</h2> */}
        </MatchesList>}
    </>
    );
}

export default Matches;