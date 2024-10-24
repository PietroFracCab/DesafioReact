// src/controllers/ReservaController.js
import ReservaModel from '../models/ReservaModel';

class ReservaController {
  constructor() {
    this.vagas = Array.from({ length: 20 }, (_, index) => ({
      numero: index + 1,
      status: 'Disponível',
      reserva: null
    }));

    // Simular que as vagas 5 e 9 estão ocupadas
    this.vagas[5].status = 'Ocupada';
    this.vagas[5].reserva = new ReservaModel(
      'ABC-1234',
      'João Silva',
      '101',
      'A',
      'Carro Modelo 1',
      'Azul',
      '10'
    );

    this.vagas[9].status = 'Ocupada';
    this.vagas[9].reserva = new ReservaModel(
      'XYZ-5678',
      'Maria Oliveira',
      '202',
      'B',
      'Carro Modelo 2',
      'Vermelho',
      '25'
    );
  }

  adicionarReserva(dados) {
    const vaga = this.vagas.find(v => v.numero === parseInt(dados.numeroVaga));
    if (vaga && vaga.status === 'Disponível') {
      vaga.status = 'Ocupada';
      vaga.reserva = new ReservaModel(
        dados.placa,
        dados.proprietario,
        dados.numeroApartamento,
        dados.bloco,
        dados.modelo,
        dados.cor,
        dados.numeroVaga
      );
    }
  }

  obterReservas() {
    return this.vagas;
  }

  removerReserva(numeroVaga) {
    const vaga = this.vagas.find(v => v.numero === parseInt(numeroVaga));
    if (vaga && vaga.status === 'Ocupada') {
      vaga.status = 'Disponível';
      vaga.reserva = null;
    }
  }
}

export default ReservaController;