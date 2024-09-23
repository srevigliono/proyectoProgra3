import { Component } from "react";
import HomeMovies from "../components/HomeMovies/HomeMovies";
import HomeMoviesGrid from "../components/HomeMoviesGrid/HomeMoviesGrid";

export class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            loading: true,
        }
    }

    componentDidMount(){
        this.setState({
            loading: true,
        });
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2`)
        .then((response) => response.json())
        .then((data) => this.setState
        ({movies: data.results,
            loading: false,
        }))
        .catch((error) => console.log(error))
    }

    render() {
        return (
            <>
           

        </>

            
        )
    }
}