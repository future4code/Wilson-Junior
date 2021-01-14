import React from "react";



export default class Home extends React.Component {
  state = {
    telaAtual: "posts"
  };

  irParaMensagens = () => {
    this.setState({ telaAtual: "mensagens" });
  };

  irParaPosts = () => {
    this.setState({ telaAtual: "posts" });
  };

  render() {
    const renderizaTelaCorreta = () => {
      switch (this.state.telaAtual) {
        case "posts":
          return <Posts />;
        case "mensagens":
          return <Mensagens />;
        default:
          return <div>Erro! Página não encontrada</div>;
      }
    };

    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.irParaPosts}>Posts</button>
        <button onClick={this.irParaMensagens}>Mensagens</button>
        <button onClick={this.props.botaoLogout}>Logout</button>
        {renderizaTelaCorreta()}
      </div>
    );
  }
}