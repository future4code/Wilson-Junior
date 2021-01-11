
import React from 'react';
import './App.css';
import styled from 'styled-components';
import Inputs from './components/Inputs';

const TaskList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

class App extends React.Component {

  state = {
    task: [],
    inputTask: ""
  };

  addTask = () => {
    const newTask = this.state.inputTask;
     const TaskList = [newTask, ...this.state.task];
    this.setState({task:TaskList});
  };


  render () {
    
    const list = this.state.task.map((task) => {
      return <TaskList>{task}</TaskList>;
    });

    return (
     <div>

     <h1>Lista de Tarefas</h1>

     <Inputs></Inputs>
     <button onClick={this.addTask}>Adicionar</button>

     <label>Filtro</label><select>
       <option>Todos</option>
       <option>Tarefas pendentes</option>
       <option>Tarefas realizadas</option>
     </select>

     </div>
    );
  }
}


export default App;
