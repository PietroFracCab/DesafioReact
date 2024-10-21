// src/App.js
import React from 'react';
import FormularioReserva from './views/FormularioReserva';
import './assets/styles/index.css';

const App = () => {
  return (
    <div className="container">
      <h1>Controle de Estacionamento</h1>
      <FormularioReserva />
    </div>
  );
};

export default App;
