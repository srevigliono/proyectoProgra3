import React, { Component } from "react";
import HomeMovies from "../components/HomeMovies/HomeMovies";


class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parsedArray = JSON.parse(storage);
            Promise.all(
                parsedArray.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
                        .then((response) => response.json())
                )
            )
                .then((data) => {
                    this.setState({
                        movies: data,
                        isLoading: false,
                    });
                })
                .catch((error) => {
                    console.error("Error fetching movie data:", error);
                    this.setState({
                        isLoading: false,
                    });
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        return (
            <div className="seccion">
                <h2 className="titulo">Tus Películas Favoritas</h2>
                <div className="populares-grid-container">
                    {this.state.isLoading ? (
                        <p className="cargando">Cargando...</p>
                    ) : (
                        this.state.movies.map((unaFav, idx) => (
                            <HomeMovies key={unaFav.id + idx} movie={unaFav} className="pelicula" />
                        ))
                    )}
                </div>
                {this.state.movies.length === 0 ? (
                    <p className="cargando">No tienes películas favoritas guardadas.</p>
                ) : null}
                <div className="vermas">
                    <a href="/">Volver a la página principal</a>
                </div>
            </div>
        );
    }
}

export default Favoritos
