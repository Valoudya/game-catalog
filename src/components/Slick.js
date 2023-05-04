import React from 'react';

class Slick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenPicture: this.props.screens[0]
        }
    }

    render() {
        return (
            <div className="modal__content__wrapper__pictures">
                <div className="slick-main" style={{backgroundImage: `url(${this.state.chosenPicture})`}}></div>
                <div className="slick-pictures">
                    {this.props.screens.map(screen => <img src={screen} alt=""
                                                           onClick={() => this.setState({chosenPicture: screen})}
                    style={this.state.chosenPicture === screen ? {outline: '1px solid #fff'} : {border: "none"}}/>)}
                </div>
            </div>
        );
    }
}

export default Slick;