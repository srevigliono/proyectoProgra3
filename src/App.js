import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Error404 from "./components/Error404/Error404";
import { Switch, Route } from 'react-router-dom';
import { SearchResults } from "./pages/SearchResults";
import Cartelera from "./pages/Cartelera";
import Populares from "./pages/Populares";
import Detalle from "./pages/Detalle";




function App() {


  return (
    <>
      <header>
        <Header />
      </header>

      <main>
          <Switch>
            <Route path='/' exact={true} component={Home} ></Route>
            <Route path="/search" component={SearchResults}></Route>
            <Route path="/peliculas-cartelera" component={Cartelera} />
            <Route path="/peliculas-populares" component={Populares} />
            <Route path="/movies/:id" component={Detalle} /> 
            <Route path="" component={Error404} />

          </Switch>

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );

}
export default App;