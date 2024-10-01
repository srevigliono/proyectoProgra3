import { Component } from "react";
import HomeMovies from "../HomeMovies/HomeMovies";
import './HomeMoviesGrid.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class HomeMoviesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) { 
          this.setState({ peliculas: data.results});
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));

  }

  render() {
    const { peliculas } = this.state;
    const movies = peliculas.slice(0, 5);

    return (
      <section className="seccion">
        <h2 className="titulo">{this.props.titulo}</h2>
        <h3 className="vermas"><Link to={this.props.link}>Ver todas</Link></h3>
        <div className="populares-grid-container">
          {movies.length > 0
            ? movies.map((movie, index) => (
                <HomeMovies movie={movie} key={index} />
              ))
            : <p className="cargando">Cargando...</p>}
        </div>
      </section>
      
      
    );
  }
}

export default HomeMoviesGrid;