import React from "react";
import Inputs from "./Inputs";

class Form02 extends React.Component {

  render() {

    return (
        <div className="App">
            <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

            <h2>5. Qual seu curso de formação?</h2>

            <Inputs/>

            <h2>6. Qual foi a instituição de ensino?</h2>

            <Inputs/>
      </div>
    );
  }
}

export default Form02;