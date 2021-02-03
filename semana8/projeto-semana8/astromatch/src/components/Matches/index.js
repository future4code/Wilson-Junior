import React from 'react'
import {MatchesList, Item} from './styled';




export const Matches = (props) => {
    return (
        <>{props.list &&         
            <MatchesList>
                {props.list && props.list.matches && props.list.matches.map((n) => {
                    console.log (n)
                return (
                    <Item>
                    <img src={n.photo} alt={n.name}/>
                    {n.name}
                    </Item>
                )})}
            </MatchesList>}
        </>
    );
}
export default Matches;


 

