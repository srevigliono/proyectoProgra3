import React, { Component } from "react";
import HomeMovies from "../components/HomeMovies/HomeMovies";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.setState({
            loading: true,
        });
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2`)
            .then((response) => response.json())
            .then((data) => this.setState
                ({
                    movies: data.results,
                    loading: false,
                }))
            .catch((error) => console.log(error))
    }

    render() {
        const { movies, loading } = this.state;

        return (
            <div className="search-results">
                {loading ? (<p>Cargando resultados...</p>) : (
                    <section>
                        <h2>Resultados de búsqueda</h2>
                        {movies.length > 0 ? (
                            <div className="search-grid">
                                {movies.map((movie, index) => (<HomeMovies movie={movie} key={index} />))}</div>) : (
                            <p>No se encontraron resultados.</p>
                        )}
                    </section>
                )}
            </div>
        );
    }
}

export default SearchResults;