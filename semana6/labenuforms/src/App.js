import React from "react";
import "./App.css";
import Form01 from "./components/Form01";
import Form02 from "./components/Form02";
import Form03 from "./components/Form03";
import Final from "./components/Final";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1
    };
  }

  renderizaFormularios = () => {
    switch (this.state.form) {
      case 1:
        return <Form01 />;
      case 2:
        return <Form02 />;
      case 3:
        return <Form03 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };

  proximoForm = () => {
    this.setState({ etapa: this.state.form + 0 });
  };


  render() {
    return (
      <div className="App">
        {this.renderizaFormularios}
        <h1>Esse é um formulário Labenu</h1>
    
         <p>Quando estiver pronto clique em iniciar para começar o preenchimento do formulário</p>
         {this.state.form !== 4 && (
         <button className="btn" onClick={this.proximoForm}>INICIAR</button>
         )}
      </div>
  )}
}

export default App;