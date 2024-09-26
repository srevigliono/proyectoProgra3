import React, { Component } from "react";
import "./Detail.css"
import Loader from "../Loader/Loader";
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            id: this.props.id
        };
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`;
        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    movie: data,
                })
            )
            .catch((e) => console.log("Error"));
    }

    render() {
        const { movie } = this.state;

        if (!movie) {
            return <Loader />;
        }

        return (

            <div className="detalle">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}
                />

                <div className="infoDetalle">
                    <h2>{movie.title}</h2>
                    <p>Rating: {movie.vote_average} </p>
                    <p>Fecha De Estreno: {movie.release_date} </p>
                    <p>Duracion: {movie.runtime} </p>
                    <p>Sinopsis: {movie.overview} </p>

                    <p><strong>Géneros:</strong></p>
                    <ul>
                        {movie.genres.map((genero, index) => (
                            <li key={index}>{genero.name}</li>
                        ))}
                    </ul>
                    
                    <button> Agregar a favoritos </button>
                </div>
            </div>

        );
    }
}
//Terminar el div del return y dar estilo!
export default Detail;
