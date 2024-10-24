import React from 'react';
import './Modal.css';

const Modal = ({ vaga, onClose }) => {
  if (!vaga) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Informações da Vaga</h2>
        <p><strong>Número:</strong> {vaga.numero}</p>
        <p><strong>Status:</strong> {vaga.status}</p>
        {vaga.reserva && (
          <>
            <p><strong>Placa:</strong> {vaga.reserva.placa}</p>
            <p><strong>Proprietário:</strong> {vaga.reserva.proprietario}</p>
            <p><strong>Apartamento:</strong> {vaga.reserva.numeroApartamento}</p>
            <p><strong>Bloco:</strong> {vaga.reserva.bloco}</p>
            <p><strong>Modelo:</strong> {vaga.reserva.modelo}</p>
            <p><strong>Cor:</strong> {vaga.reserva.cor}</p>
          </>
        )}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;