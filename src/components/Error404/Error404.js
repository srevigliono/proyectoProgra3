import React, { Component } from 'react';
import './Error404.css' 

class Error404 extends Component {
    render() {
      return (
        <section className="text-error">
        <img src="/img/Error404.jpg" alt="Error 404" className="imagen-error" />
        <p>Error:</p>
        <p>La pagina no existe pipi</p>
        <p>Haga click <a href='/' className="link-error">AQUI</a> para volver a la página de inicio
        </p>
    </section>
        )
    }
  }

export default Error404