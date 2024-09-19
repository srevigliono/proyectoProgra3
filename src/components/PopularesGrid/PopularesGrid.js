import React, { Component } from "react";
import PeliculasPopulares from "../PeliculasPopulares/PeliculasPopulares";
import './PopularesGrid.css'

class PopularesGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            cargarMasPeliculas: false

        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1')
            .then(response => response.json())
            .then(data => {
                if (data && data.results) {
                    this.setState({ peliculas: data.results.slice(0, 10) });
                } else {
                    console.error("No se encuentran películas");
                }
            })
            .catch(error => console.log(error));
    }



    cargarMasPeliculas() {
        this.setState({
            cargarMasPeliculas: true
        })
    }

    render() {
        const { peliculas } = this.state;

        return (
            <section className="seccion">
                <h2 className="titulo">Todas las Peliculas más Populares</h2>
                <div className="peliculas-grid-container">
                    {peliculas.length > 0
                        ? peliculas.map((movie, index) => (
                            <PeliculasPopulares movie={movie} key={index} />
                        ))
                        : <p className="cargando">Cargando...</p>}
                </div>
                <button className={this.state.cargarMasPeliculas ? 'cargarMasPeliculas': 'cargarMasPeliculas'} onClick={() => this.cargarMasPeliculas()} >  
                    {this.state.cargarMasPeliculas ? 'Mostrar Menos Peliculas Populares' : 'Mostrar Mas Peliculas Populares'} </button>
            </section>
        );
    }
}

export default PopularesGrid;