import React, { useState, useEffect } from 'react';
import ReservaController from '../controllers/ReservaController';
import Modal from '../components/Modal'; // Importando o componente Modal

const reservaController = new ReservaController();

const ListaVagas = () => {
  const [vagas, setVagas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);

  useEffect(() => {
    setVagas(reservaController.obterReservas());
  }, []);

  const handleRemover = (numeroVaga) => {
    const confirmacao = window.confirm(`Você realmente deseja remover a reserva da vaga ${numeroVaga}?`);
    if (confirmacao) {
      reservaController.removerReserva(numeroVaga);
      setVagas([...reservaController.obterReservas()]);
    }
  };

  const handleVagaClick = (vaga) => {
    setVagaSelecionada(vaga);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setVagaSelecionada(null);
  };

  const metade = Math.ceil(vagas.length / 2);
  const primeiraMetade = vagas.slice(0, metade);
  const segundaMetade = vagas.slice(metade);

  return (
    <div>
      <h1>Lista de Vagas de Estacionamento</h1>
      <div className="listas-vagas">
        <ul>
          {primeiraMetade.map((vaga) => (
            <li key={vaga.numero} onClick={() => handleVagaClick(vaga)}>
              <span className={`vaga-info ${vaga.status === 'Ocupada' ? 'ocupada' : ''}`}>
                Vaga {vaga.numero}: {vaga.status}
              </span>
              {vaga.status === 'Ocupada' && (
                <button onClick={(e) => { e.stopPropagation(); handleRemover(vaga.numero); }}>Remover</button>
              )}
            </li>
          ))}
        </ul>
        <ul>
          {segundaMetade.map((vaga) => (
            <li key={vaga.numero} onClick={() => handleVagaClick(vaga)}>
              <span className={`vaga-info ${vaga.status === 'Ocupada' ? 'ocupada' : ''}`}>
                Vaga {vaga.numero}: {vaga.status}
              </span>
              {vaga.status === 'Ocupada' && (
                <button onClick={(e) => { e.stopPropagation(); handleRemover(vaga.numero); }}>Remover</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {modalOpen && (
        <Modal vaga={vagaSelecionada} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ListaVagas;