import React from "react";
import './Games.css';

class Game extends React.Component {
    render() {
        const { jogo } = this.props;
        return (
            <div className="gameCard">
                <div className="championship">
                    <h3>{jogo.campeonato.nome_popular}</h3>
                </div>
                <div className="time">
                    <h2>{jogo.hora_realizacao}</h2>    
                </div>
                <div className="teamsPlaying">
                    <div className="team1">
                        <div className="team1-info">
                            <p className="teamShortName">{jogo.time_mandante.sigla}</p>
                            <p className="teamName">{jogo.time_mandante.nome_popular}</p>
                        </div>
                        <div class="teamShield">
                            <img src={jogo.time_mandante.escudo} alt="escudo" />
                        </div>
                    </div>
                    <div className="team2">
                        <div class="teamShield">
                            <img src={jogo.time_visitante.escudo} alt="escudo" />
                        </div>
                        <div className="team2-info">
                            <p className="teamShortName">{jogo.time_visitante.sigla}</p>
                            <p className="teamName">{jogo.time_visitante.nome_popular}</p>
                        </div>
                    </div>
                </div>
                <div className="streamingsTv">
                    <h3>Streamings e TV</h3>
                    <input className="streamingsTvInput" placeholder="Escreva aqui"></input>
                </div>
                <div>
                    <hr className="solid"></hr>
                </div>
            </div>
        )
    }
};

export default Game;