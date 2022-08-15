import React from 'react';
import GamesList from './components/GamesList/GamesList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <h1>Onde passa o jogo</h1>
        <GamesList />
      </div>
    );
  }
}

export default App;
