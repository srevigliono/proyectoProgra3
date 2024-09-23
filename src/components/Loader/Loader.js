import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loading-container">
            <img src="/image/icons8-cargando" alt="Cargando..." />
            <p>Cargando...</p>
        </div>
    );
};

export default Loader;