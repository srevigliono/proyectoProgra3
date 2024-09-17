import React, { Component } from 'react';
import './Error404.css' 

class Error404 extends Component {
    render() {
      return (
        <section className="text-error">
        <p>Error:</p>
        <p>La pagina que estas buscando no existe</p>
        <p>Haga click <a href='/' className="link-error">Aca!</a> para volver a la página de inicio
        </p>
    </section>
        )
    }
  }

export default Error404