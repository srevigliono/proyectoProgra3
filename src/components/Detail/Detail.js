import React, { Component } from "react";

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

        return (
         
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}
                    />
                    <h2>{movie.title}</h2>
                    <p>Rating: </p>
                    <p>Fecha De Estreno: </p>
                    <p>Duracion: </p>
                    <p>Sinopsis: </p>
                    <p>Género: </p>
                    <button> Agregar a favoritos </button>
                </div>
      
        );
    }
}
//Terminar el div del return y dar estilo!
export default Detail;
