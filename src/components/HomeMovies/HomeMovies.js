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
      <article className="populares-card">
        <Link to={`/movies/${id}`} className="populares-image-link">
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt={title}
            className="populares-image"
          />
          <div className="populares-title-overlay">
            <h3>{title}</h3>
          </div>
        </Link>

        <div className="populares-buttons">
          <button onClick={this.descripcion} className="populares-button">
            {showExtra ? "Ocultar descripción" : "Ver descripción"}
          </button>

          <button className="populares-button">Agregar a Favoritos</button>
        </div>

        {showExtra && <p className="populares-overview">{overview}</p>}
      </article>
    );
  }
}

export default HomeMovies;
