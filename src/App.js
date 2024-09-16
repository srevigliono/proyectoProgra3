import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Error404 from "./components/Error404/Error404";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {


  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Switch>
          <Home />



          <Route path ="" component={Error404} />
        </Switch>

      </main>


      <footer>

        <Footer />

      </footer>
    </>
  );

}
export default App;
