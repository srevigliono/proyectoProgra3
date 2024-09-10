import './Home.css'
import { Link } from 'react-router-dom';




const Home = () => {
    return(
        <div>
        <input 
          type="text"
          placeholder="Buscar película..."
        />
        
        <section>
          <h2>Películas más populares  <Link to="/popular-movies">Ver todas</Link></h2>  
          <div>
 
          </div>
        </section>
  
        <section>
          <h2>Películas en cartel <Link to="/current-movies">Ver todas</Link></h2>
          <div >
          </div>
          
        </section>
      </div>
    )
}

export default Home