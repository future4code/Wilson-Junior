import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const InputText = styled.input `
    border: 2px solid #005b9f; 
    border-radius: 8px;
    margin: 1%;
    padding: 2%;
    font-size:12px;
    width: 100%;
`

function Input (props){
    
    const [text, setText] = useState('');
    
    useEffect(()=>{
        props.onChangeText(text)
    }, [text]);
   
    return(
     <>
        <InputText 
            Type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder={ props.frase }
        />
     </>
    );
}

export default Input;