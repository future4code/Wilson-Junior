import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const InputText = styled.input `
    border: 2px solid #000;
    border-radius: 5px;
    margin: 1%;
    padding: 15px;
    font-size:17px;
    width: 300px;
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