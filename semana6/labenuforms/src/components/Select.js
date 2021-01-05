import React from 'react';
import styled from 'styled-components';

const Select = styled.select
`
    width:400px;
    height: 25px;
    font-size:16px;
    padding:10px;
    margin: auto;
`;

function select(props) {
    return (
        <div>
          <Select>
            {props.opcoes.map(opcao => (
              <option value={opcao}>{opcao}</option>
            ))}
          </Select>
        </div>
    );

}

export default select;
