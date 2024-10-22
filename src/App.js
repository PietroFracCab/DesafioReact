import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioReserva from './views/FormularioReserva';
import ListaVagas from './views/ListaVagas';
import './assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<FormularioReserva />} />
          <Route path="/vagas" element={<ListaVagas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;