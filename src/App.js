import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistraVagas from './views/RegistraVagas';
import ListaVagas from './views/ListaVagas';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<RegistraVagas />} />
          <Route path="/vagas" element={<ListaVagas />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;