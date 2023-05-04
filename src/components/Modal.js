import React from 'react';
import Slick from "./Slick";

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    game = {
        name: this.props.game.name,
        mainImg: this.props.game.background_image,
        screenShots: this.props.game.short_screenshots.map(screen => screen.image),
        genres: this.props.game.genres.map(genre => genre.name),
        released: this.props.game.released.split('-').join(' '),
        rating: this.props.game.rating
    }

    render() {
        return (
            <div className="modal" onClick={this.props.modal}>
                <div className="modal__content" onClick={event => event.stopPropagation()}>
                    <h3>{this.game.name}</h3>
                    <div className="modal__content__wrapper">
                        <Slick screens={this.game.screenShots}/>
                        <div className="modal__content__wrapper__description">
                            <div className="modal__content__wrapper__description__genres">
                                {this.game.genres.map(genre => <button key={genre}>{genre}</button>)}
                            </div>
                            <div className="modal__content__wrapper__description__text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, debitis dolor
                                    dolorem exercitationem fugiat illum neque officia quam qui? Beatae deleniti deserunt
                                    dolorem, esse in minima nam odio perferendis repellat.</p>
                            </div>
                            <div className="modal__content__wrapper__description__release">
                                <p>Release date: {this.game.released}</p>
                            </div>
                            <div className="modal__content__wrapper__description__rating">
                                <p>Rating: {this.game.rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;