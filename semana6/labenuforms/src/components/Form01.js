import React from "react";
import Inputs from "./Inputs";
import Select from "./Select";

class Form01 extends React.Component {

  render() {

    return (
        <div className="App">
            <h1>Etapa 1 - DADOS GERAIS</h1>

            <h2>1. Qual o seu nome?</h2>

            <Inputs/>

            <h2>2. Qual a sua idade?</h2>

            <Inputs/>

            <h2>3. Qual o seu e-mail?</h2>

            <Inputs/>

            <h2>4. Qual a sua escolaridade?</h2>

            <Select
            opcoes={[
                "Ensino médio incompleto", 
                "Ensino médio completo", 
                "Ensino superior incompleto",
                "Ensino superior completo"]}
            />
      </div>
    );
  }
}

export default Form01;