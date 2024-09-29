import React, { Component } from "react";
import HomeMovies from "../components/HomeMovies/HomeMovies";
// falta el css

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        const storage = localStorage.getItem("favoritos");
        const parsedArray = JSON.parse(storage);

        Promise.all(
            parsedArray.map((id) => {
                return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
                    .then((response) => response.json())
                    .then((movie) => 
                        this.setState({
                            movies: [...this.state.movies, movie],
                        })
                    )
                    .catch((error) => {
                        console.error("Error fetching movie:", error);
                    });
            })
        ).then(() => {
            this.setState({
                isLoading: false,
            });
        });
    }

    render() {
        return (
            <>
                <div>
                    {this.state.movies.map((unaFav, idx) => (
                        <HomeMovies key={unaFav.name + idx} movie={unaFav} />
                    ))}
                </div>
            </>
        );
    }
}

export default Favoritos;
