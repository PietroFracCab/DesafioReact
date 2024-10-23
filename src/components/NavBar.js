import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/index.css';

const NavBar = () => {
  return (
    <nav className="nav-buttons">
      <Link to="/"><button>Cadastro de Reserva</button></Link>
      <Link to="/vagas"><button>Lista de Vagas</button></Link>
    </nav>
  );
};

export default NavBar;