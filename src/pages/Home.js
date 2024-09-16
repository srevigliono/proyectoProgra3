import { SearchForm } from "../components/SearchForm/SearchForm";
import HomeMoviesGrid from "../components/HomeMoviesGrid/HomeMoviesGrid";
import { Component } from "react";

class Home extends Component {
  render(

  ) {
    return (
      <>
        <main>

          <header>
          </header>
          <SearchForm history={this.props.history} />
          <h2 className="titulo">Películas Cartelera</h2>
          <HomeMoviesGrid url={'https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
         <h2 className="titulo">Películas Populares</h2>
          <HomeMoviesGrid url={'https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
        </main>
      </>
    );
  }

};

export default Home;
