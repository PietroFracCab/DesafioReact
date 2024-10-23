// src/views/FormularioReserva.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReservaController from '../controllers/ReservaController';

const reservaController = new ReservaController();

const FormularioReserva = () => {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    numeroApartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    numeroVaga: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reservaController.adicionarReserva(formData);
    console.log('Cadastro realizado:', formData);
    alert('Cadastro realizado com sucesso!');
    setFormData({
      placa: '',
      proprietario: '',
      numeroApartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      numeroVaga: ''
    });
  };

  return (
    <div>
      <h1>Cadastro de Reserva</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="placa"
          placeholder="Placa do veículo"
          value={formData.placa}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="proprietario"
          placeholder="Nome do proprietário"
          value={formData.proprietario}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="numeroApartamento"
          placeholder="Número do apartamento"
          value={formData.numeroApartamento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bloco"
          placeholder="Bloco do apartamento"
          value={formData.bloco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="modelo"
          placeholder="Modelo do veículo"
          value={formData.modelo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cor"
          placeholder="Cor do veículo"
          value={formData.cor}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="numeroVaga"
          placeholder="Número da vaga de estacionamento"
          value={formData.numeroVaga}
          onChange={handleChange}
          required
        />
        <button type="submit">Salvar Reserva</button>
      </form>
    </div>
  );
};

export default FormularioReserva;