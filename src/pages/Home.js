
import HomeMoviesGrid from "../components/HomeMoviesGrid/HomeMoviesGrid";

const Home = () => {
  
  return (
    <>
      <main>
        
        <header>
        </header>
        <HomeMoviesGrid url={'https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
       <HomeMoviesGrid url={'https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
      </main>
    </>
  );
};

export default Home;
