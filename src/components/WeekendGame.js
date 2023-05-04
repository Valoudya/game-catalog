import React from 'react';

class WeekendGame extends React.Component {
    render() {
        return (
            <div className="weekend-game__game" >
                <a href="" style={{backgroundImage: `url(${this.props.image})`}}>
                    <div className="weekend-game__game__description">
                        <h2>{this.props.gameName}</h2>
                        <div className="weekend-game__game__description__genres">
                            {this.props.genres.map(genre => <button onClick={e => e.stopPropagation()}>{genre}</button>)}
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default WeekendGame;