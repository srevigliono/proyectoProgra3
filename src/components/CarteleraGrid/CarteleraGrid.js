import React, { Component } from "react";
import PeliculasCartelera from "../PeliculasCartelera/PeliculasCartelera";
import './CarteleraGrid.css'

class CarteleraGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1')
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          this.setState({ peliculas: data.results });
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { peliculas, search } = this.state;

    const peliculasFiltradas = peliculas.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <section className="cartelera-seccion">
        <h2 className="titulo">Todas las Películas en Cartelera</h2>
        
        <input
          type="text" className="search-input"
          placeholder="Buscar por título..."
          value={search}
          onChange={this.handleSearch}
        />

        <div className="peliculas-grid-container">
          {peliculasFiltradas.length > 0
            ? peliculasFiltradas.map((movie, index) => (
                <PeliculasCartelera movie={movie} key={index} />
              ))
            : <p className="cargando">No se encontraron películas</p>}
        </div>
      </section>
    );
  }
}

export default CarteleraGrid;