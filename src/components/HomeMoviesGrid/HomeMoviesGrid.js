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
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1')
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

    const peliculasPopulares = peliculas.slice(0, 5);
    const peliculasCartelera = peliculas.slice(5, 10); 

    return (
      <section className="seccion">
        <h2 className="populares-titulo">Películas Populares</h2>
        <h3 className="vermas"><Link to={"/all-movies"}>Ver todas</Link></h3>
        <div className="populares-grid-container">
          {peliculasPopulares.length > 0
            ? peliculasPopulares.map((movie, index) => (
                <HomeMovies movie={movie} key={index} />
              ))
            : <p className="cargando">Cargando...</p>}
        </div>

        <h2 className="populares-titulo">Películas en Cartelera</h2>
        <h3 className="vermas"><Link to={"/all-movies"}>Ver todas</Link></h3>
        <div className="container">
          {peliculasCartelera.length > 0
            ? peliculasCartelera.map((movie, index) => (
                <HomeMovies movie={movie} key={index} />
              ))
            : <p className="cargando">Cargando...</p>}
        </div>
      </section>
      
      
    );
  }
}

export default HomeMoviesGrid;
