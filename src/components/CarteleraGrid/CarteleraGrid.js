import React, { Component } from "react";
import PeliculasCartelera from "../PeliculasCartelera/PeliculasCartelera";

import './CarteleraGrid.css'

class CarteleraGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      generos: [],
      selectedGenero: ""
    };
  }

  componentDidMount() {
    this.fetchPeliculas();
    this.fetchGeneros();
  }

  fetchPeliculas = (generoId = "") => {
    const url = generoId
      ? `https://api.themoviedb.org/3/discover/movie?api_key=e6a0d8ba2d9778d0953077400f26f011&with_genres=${generoId}`
      : `https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1`;
    
    fetch(url)
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

  fetchGeneros = () => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US')
      .then(response => response.json())
      .then(data => {
        if (data && data.genres) {
          this.setState({ generos: data.genres });
        }
      })
      .catch(error => console.log(error));
  }

  CambioGenero = (event) => {
    const selectedGenero = event.target.value;
    this.setState({ selectedGenero });
    this.fetchPeliculas(selectedGenero); 
  }

  render() {
    const { peliculas, generos, selectedGenero } = this.state;

    return (
      <section className="cartelera-seccion">
        <h2 className="titulo">Todas las Películas en Cartelera</h2>

       
        <form className="formulario-filtrar">
          <select id="genero" value={selectedGenero} onChange={this.CambioGenero}>
            <option value="">Todos los Géneros</option>
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.name}
              </option>
            ))}
          </select>
        </form>

        <div className="peliculas-grid-container">
          {peliculas.length > 0
            ? peliculas.map((movie, index) => (
                <PeliculasCartelera movie={movie} key={index} />
              ))
            : <p className="cargando">Cargando...</p>}
        </div>
      </section>
    );
  }
}

export default CarteleraGrid;