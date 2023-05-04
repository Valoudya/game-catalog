import React from 'react';
import axios from "axios";
import CatalogGame from "./CatalogGame";
import SimpleSlider from "./SimpleSlider";
import Filter from "./Filter";
import Modal from "./Modal";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            filter: '',
            modal: false
        }
    }

    catalog = []
    genres = []

    modal = () => {
        this.setState({modal: !this.state.modal})
    }

    setFilter = (filter) => {
        this.setState({filter: filter})
    }

    componentDidMount() {
        axios.get('/api.json')
            .then(response => {
                this.catalog = response.data
                this.setState({
                    loaded: true
                })
            })
    }

    render() {
        return (
            <div className="catalog">
                <Filter catalog={this.catalog} filter={this.setFilter}/>
                <div className="catalog__wrapper">
                    {this.state.loaded ?
                        this.catalog.map(game =>
                            <CatalogGame game={game} name={game.name} image={game.background_image} key={game.id} genres={game.genres} filter={this.state.filter} modal={this.modal}/>
                        ) : 'Loading...'
                    }
                </div>
            </div>
        );
    }
}

export default Catalog;