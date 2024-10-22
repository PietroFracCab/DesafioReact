import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReservaController from '../controllers/ReservaController';

const reservaController = new ReservaController();

const ListaVagas = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    setVagas(reservaController.obterReservas());
  }, []);

  const handleRemover = (numeroVaga) => {
    const confirmacao = window.confirm(`Você realmente deseja remover a reserva da vaga ${numeroVaga}?`);
    if (confirmacao) {
      reservaController.removerReserva(numeroVaga);
      setVagas(reservaController.obterReservas());
    }
  };

  const metade = Math.ceil(vagas.length / 2);
  const primeiraMetade = vagas.slice(0, metade);
  const segundaMetade = vagas.slice(metade);

  return (
    <div>
      <h1>Lista de Vagas de Estacionamento</h1>
      <div className="nav-buttons">
        <Link to="/"><button>Cadastro de Reserva</button></Link>
        <Link to="/vagas"><button>Lista de Vagas</button></Link>
      </div>
      <div className="listas-vagas">
        <ul>
          {primeiraMetade.map((vaga) => (
            <li key={vaga.numero}>
              Vaga {vaga.numero}: {vaga.status}
              {vaga.status === 'Ocupada' && (
                <button onClick={() => handleRemover(vaga.numero)}>Remover</button>
              )}
            </li>
          ))}
        </ul>
        <ul>
          {segundaMetade.map((vaga) => (
            <li key={vaga.numero}>
              Vaga {vaga.numero}: {vaga.status}
              {vaga.status === 'Ocupada' && (
                <button onClick={() => handleRemover(vaga.numero)}>Remover</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaVagas;