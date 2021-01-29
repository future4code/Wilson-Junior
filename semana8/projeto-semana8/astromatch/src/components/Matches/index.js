import React from 'react'
import MatchesList from './styled';


export const Matches = (props) => {
    return (
        <>{props.list &&         
            <MatchesList>
                {props.list && props.list.matches && props.list.matches.map((n) => {
            
                return <p>{n.name}</p>})}
            </MatchesList>}
        </>
    );
}
export default Matches;


   {/* <img src={props.list.photo} alt={props.list.name}/>
                    <h2>{props.list.name}</h2> */}

