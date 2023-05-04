import React from 'react';
import WeekendGame from "./WeekendGame";

class Weekend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: 'Grand Theft Auto',
            image: 'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg',
            id: '3498',
            released: "2013-09-17",
            genres: ['Action', 'Shooter']
        }
    }

    render() {
        return (
            <div className="weekend-game">
                <WeekendGame gameName={this.state.gameName} image={this.state.image} id={this.state.id} genres={this.state.genres}/>
            </div>
        );
    }
}

export default Weekend;