import React from "react";
import './Games.css';

const game = {
    championship: 'Copa do Brasil',
    time: '16h',
    teamShortName1: 'CRU',
    teamName1: 'Cruzeiro',
    teamShortName2: 'CAM',
    teamName2: 'Atlético',
    streamingsTv: 'Premier e Amazon Prime'
};

class Game extends React.Component {
    render() {
        return (
            <div className="gameCard">
                <div className="championship">
                    <h3>{game.championship}</h3>
                </div>
                <div className="time">
                    <h2>{game.time}</h2>
                </div>
                <div className="teamsPlaying">
                    <div className="team1">
                        <div className="team1-info">
                            <p className="teamShortName">{game.teamShortName1}</p>
                            <p className="teamName">{game.teamName1}</p>
                        </div>
                        <div class="teamShield">
                            <img src="https://www.escudosfc.com.br/images/cruzeiro.png" alt="escudo" />
                        </div>
                    </div>
                    <div className="team2">
                        <div class="teamShield">
                            <img src="https://www.escudosfc.com.br/images/atletico.png" alt="escudo" />
                        </div>
                        <div className="team2-info">
                            <p className="teamShortName">{game.teamShortName2}</p>
                            <p className="teamName">{game.teamName2}</p>
                        </div>
                    </div>
                </div>
                <div className="streamingsTv">
                    <h3>{game.streamingsTv}</h3>
                </div>
                <div>
                    <hr className="solid"></hr>
                </div>
            </div>
        )
    }
};

export default Game;