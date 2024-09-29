import { Link } from "react-router-dom";
import { Component } from "react";
import './HomeMovies.css';

class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtra: false,
      esFavorito: false,
    };
  }

  componentDidMount() {
    let storage = localStorage.getItem("favoritos");

    if (storage !== null) {
      const guardados = JSON.parse(storage);
      const estaEnFavoritos = guardados.includes(this.props.movie.id);
      this.setState({
        esFavorito: estaEnFavoritos
      });
    }
  }

  agregarFav() {
    const storage = localStorage.getItem("favoritos");

    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      parsedArray.push(this.props.movie.id);
      const stringArray = JSON.stringify(parsedArray);
      localStorage.setItem("favoritos", stringArray);
    } else {
      const primerMovie = [this.props.movie.id];
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
      const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id);
      const stringArray = JSON.stringify(favoritosRestantes);
      localStorage.setItem("favoritos", stringArray);

      this.setState({
        esFavorito: false
      });
    }
  }

  descripcion = () => {
    this.setState(prevState => ({
      showExtra: !prevState.showExtra
    }));
  };


  render() {
    const { id, title, poster_path, overview } = this.props.movie;
    const { showExtra, esFavorito } = this.state;

    return (
      <article className="pelicula">
        <Link to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt={title}
            className="imagen"
          />
          <div className="titulo-pelicula">
            <h3>{title}</h3>
          </div>
        </Link>

        <div className="buttons">
          <button onClick={this.descripcion} className="botones">
            {showExtra ? "Ocultar descripción" : "Ver descripción"}
          </button>


          <button onClick={() => !this.state.esFavorito ? this.agregarFav() : this.sacarFav()} className='botones'>
            {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}
          </button>
        </div>

        {showExtra && <p className="description">{overview}</p>}
      </article>
    );
  }
}

export default HomeMovies;
