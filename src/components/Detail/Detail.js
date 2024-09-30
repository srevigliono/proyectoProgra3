import React, { Component } from "react";
import "./Detail.css"
import Loader from "../Loader/Loader";
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            id: this.props.id,
            textoAMostrar: "Agregar a favoritos "
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

        let storage = localStorage.getItem("favoritos");

        if (storage !== null) {
            const guardados = JSON.parse(storage);
            const estaEnFavoritos = guardados.includes(this.state.id);
            this.setState({
                esFavorito: estaEnFavoritos
            });
        }


        //aca me pongo lo mismo que tengo en home movies de la parte de favoritos 
    }

    agregarFav() {
        const storage = localStorage.getItem("favoritos");

        if (storage !== null) {
            const parsedArray = JSON.parse(storage);
            parsedArray.push(this.state.id);
            const stringArray = JSON.stringify(parsedArray);
            localStorage.setItem("favoritos", stringArray);
        } else {
            const primerMovie = [this.state.id];
            const stringArray = JSON.stringify(primerMovie);
            localStorage.setItem("favoritos", stringArray);
        }

        this.setState({
            esFavorito: true
        });
    }

    sacarFav() {
        const storage = localStorage.getItem("favoritos");

        if (storage !== null) {
            const parsedArray = JSON.parse(storage);
            const favoritosRestantes = parsedArray.filter(id => id !== this.state.id);
            const stringArray = JSON.stringify(favoritosRestantes);
            localStorage.setItem("favoritos", stringArray);

            this.setState({
                esFavorito: false
            });
        }
    }


    //funcionalidad de favoritos 

    render() {
        const { movie, esFavorito } = this.state;


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

                    <button onClick={() => !this.state.esFavorito ? this.agregarFav() : this.sacarFav()} className='botones'>
                        {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}
                    </button>
                </div>
            </div>

        );
    }
}
//Terminar el div del return y dar estilo!
export default Detail;
