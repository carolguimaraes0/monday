import React from 'react';
import GamesList from './components/GamesList/GamesList';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

const jogo = {
  partida_id: 663,
  campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
      nome_popular: "Brasileirão",
      },
  time_mandante: {
      time_id: 45,
      nome_popular: "Grêmio",
      sigla: "GRE",
      escudo: "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cbc411b2.svg"
      },
  time_visitante: {
      time_id: 65,
      nome_popular: "Corinthians",
      sigla: "COR",
      escudo: "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7ab48fa.svg"
  },
  data_realizacao: "15/08/2020",
  hora_realizacao: "19:00",
  data_realizacao_iso: "2020-08-15T19:00:00-0300"
}

const jogos = [
  jogo,
  jogo,
  jogo,
  jogo,
  jogo,
  jogo,
];



class App extends React.Component {
  searchFutebolApi(term, sortBy) {
    console.log(`You are searching for ${term} and ${sortBy}.`)
  }
  render() {
    return (
      <div class="App">
        <h1>Onde passa o jogo</h1>
        <SearchBar searchFutebolApi={this.searchFutebolApi} />
        <GamesList jogos={jogos} />
      </div>
    );
  }
}

export default App;
