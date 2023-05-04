import React from 'react';
import axios from "axios";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    catalog = []
    genres = []
    genresNameArray = []

    componentDidMount() {
        axios.get('/api.json')
            .then(response => {
                this.catalog = response.data
                this.setState({
                    loaded: true
                })
                this.genres = this.catalog.map(game => game.genres)
                this.genresNameArray = Array.from(new Set(this.genres.map(genres => genres.map(genre => genre.name)).join(",").split(",")))
            })
    }

    render() {
        return (
            <div className="catalog__filter">
                <div className="catalog__filter__genres">
                    {this.state.loaded ? this.genresNameArray.map((genre, key) => <button key={key}
                                                                                          onClick={() => {this.props.filter(genre)}}>
                        {genre}</button>) : "Loaded..."}
                </div>
                <div className="catalog__filter__search">
                    <input type="text" placeholder="search..."/>
                    <button>search</button>
                </div>
            </div>
        );
    }
}

export default Filter;