import React from "react";
import Inputs from "./Inputs";
import Select from "./Select";

class Form03 extends React.Component {

  render() {

    return (
        <div className="App">
            <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

            <h2>7. Por que você não terminou um curso de graduação?</h2>

            <Inputs/>
       
            <h2>8. Você fez algum curso complementar?</h2>

            <Select
            opcoes={[
                "Nenhum", 
                "Curso Técnico", 
                "Curso de Inglês",
            ]}
            />
      </div>
    );
  }
}

export default Form03;