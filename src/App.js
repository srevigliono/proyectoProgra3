import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Error404 from "./components/Error404/Error404";
import {  Switch, Route } from 'react-router-dom';
import { SearchResults } from "./pages/SearchResults";



function App() {


  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Switch>
          <Route path='/' exact component={Home} ></Route>
          <Route path ="" component={Error404} />
          <Route path="/search" component={SearchResults}></Route>
        </Switch>

      </main>


      <footer>

        <Footer />

      </footer>
    </>
  );

}
export default App;
