// src/controllers/ReservaController.js
import ReservaModel from '../models/ReservaModel';

class ReservaController {
  constructor() {
    this.reservas = [];
  }

  adicionarReserva(dados) {
    const novaReserva = new ReservaModel(
      dados.placa,
      dados.proprietario,
      dados.numeroApartamento,
      dados.bloco,
      dados.modelo,
      dados.cor,
      dados.numeroVaga
    );
    this.reservas.push(novaReserva);
  }

  obterReservas() {
    return this.reservas;
  }
}

export default ReservaController;