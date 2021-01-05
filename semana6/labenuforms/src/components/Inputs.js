import React, {useState} from 'react';
import styled from 'styled-components';

const Inputs = styled.input
`
    width:400px;
    height:25px;
    font-size:16px;
    padding:10px;
    margin: auto;
`;

function InputText() {

    const [texto, setTexto] = useState ('');
    const handleInput = (e) => {
        setTexto(e.target.value) 
    };

    return(
        <>
        <Inputs type ="text" value={texto} onChange={handleInput} />
        </>
    );
}

export default InputText;