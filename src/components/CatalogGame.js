import React from 'react';
import Modal from "./Modal";
import Slick from "./Slick";

class CatalogGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: this.props.image,
            modal: false,
            gameTitle: ''
        }
    }

    modal = () => {
        this.setState({
            modal: !this.state.modal,
            gameTitle: this.props.name
        })
    }

    render() {
        return (
            <div className="catalog__wrapper__game" id={this.props.id}>
                <img src={this.props.image} alt=""/>
                <div className="catalog__wrapper__game__description">
                    <p>
                        {this.props.name}
                    </p>
                    <div className="catalog__wrapper__game__description__genres">
                        {this.props.genres.map((genre, item) => <button key={item}>{genre.name}</button>)}
                    </div>
                    <button onClick={this.modal}>Play now</button>
                </div>
                {this.state.modal && <Modal modal={this.modal} game={this.props.game}/>}
            </div>
        );
    }
}

export default CatalogGame;