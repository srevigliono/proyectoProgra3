import { Link } from "react-router-dom";
import { Component } from "react";
import './HomeMovies.css'; 

class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtra: false
    };
  }

  descripcion = () => {
    this.setState(prevState => ({
      showExtra: !prevState.showExtra
    }));
  };

  render() {
    const { id, title, poster_path, overview } = this.props.movie;
    const { showExtra } = this.state;

    return (
      <article className="pelicula">
        <Link to={`/movies/${id}`} >
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

          <button className="botones"><i className="fas fa-star"></i></button>
        </div>

        {showExtra && <p className="description">{overview}</p>}
      </article>
    );
  }
}

export default HomeMovies;
