import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Error404 from "./components/Error404/Error404";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


function App() {


  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Switch>
         
        </Switch>
        <Home />
      </main>


      <footer>

        <Footer />

      </footer>
    </>
  );

}
export default App;
