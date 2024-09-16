import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"



function App() {
 

  return (
    <>
    <header>
        <Header/>
    </header>

    <main>
        <Home />  
      </main>


    <footer>
        <Footer/>
    </footer>
    </>
  );
   
}
export default App;
