import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Estudar', 'Ler', 'Dormir']

class App extends React.Component {
  render() {
    return (
      <ul>{tarefas.map(task => Task(task))}</ul>
    );
  }
}

export default App;
