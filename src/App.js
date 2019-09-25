import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './tareas.json';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation titulo="Mi primera navegación en react"/>
      </header>cd
    </div>
  );
}*/

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      todos
    }
  }
  
  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="card" key={i}>
          {todo.title}
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <Navigation titulo="Mi primera navegación en react"/>
        </header>
        {todos}
      </div>
    );
  }
}

export default App;
