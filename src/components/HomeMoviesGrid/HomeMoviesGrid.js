import { Component } from "react";
import Populares from "../HomeMovies/HomeMovies";
import './HomeMoviesGrid.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class HomeMoviesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculaspopulares: []
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1')
      .then(response => response.json())
      .then(data => {
        if (data && data.results) { 
          this.setState({ peliculaspopulares: data.results.slice(0, 5) });
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const { peliculaspopulares } = this.state;

    return (
      <section className="populares-grid-section">
        <h2 className="populares-titulo">Películas Populares</h2>
        <h3 className="vermas"> <Link to={"/all-movies"}>Ver todas</Link> </h3>   
        <div className="populares-grid-container">
          {peliculaspopulares.length > 0
            ? peliculaspopulares.map((movie, index) => (
                <Populares movie={movie} key={index} />
              ))
            : <p className="cargando">Cargando...</p>}
        </div>
      </section>
      
    );
  }
}

export default HomeMoviesGrid;
