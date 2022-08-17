import React from "react";
import './GamesList.css';
import Games from '../Games/Games';

class GamesList extends React.Component {
    render() {
        return (
            <div className="GameList">
                {
                this.props.jogos.map((jogo) => {
                    return (<Games jogo={jogo}/>);
                })
                }
            </div>
        )
    }
};

export default GamesList;
