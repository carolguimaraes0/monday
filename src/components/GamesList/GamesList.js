import React from "react";
import './GamesList.css';
import Games from '../Games/Games';

class GamesList extends React.Component {
    render() {
        return (
            <div className="GameList">
                <Games />
                <Games />
                <Games />
                <Games />
                <Games />
                <Games />
            </div>
        )
    }
};

export default GamesList;
