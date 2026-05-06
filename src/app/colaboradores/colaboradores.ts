import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaboradores',
  imports: [FormsModule],
  templateUrl: './colaboradores.html',
  styleUrl: './colaboradores.css',
})
export class ColaboradoreComponent {
  colaboradores:string[] = []
  datasNascimentos:string[] = []
  valoresHoras:number[] = []
  quantidadesHoras:number[] = []
  valesRefeicoes:number[] = []
  valesTrasnportes:number[] = []
  planosSaudes:number[] = []
  salariosBrutos:number[] = []
  salariosLiquidos:number[] = []

  nome:string = ""
  dataNascimento:string = ""
  valorHora:number = 0
  quantidadeHora:number = 0
  valeRefeicao:number = 0
  valeTrasnporte:number = 0
  planoSaude:number = 0
  salarioBruto:number = 0
  salarioLiquido:number = 0

  indiceParaEditar: number = -1

  salvar(): void {
    if (this.indiceParaEditar === -1) {
      this.calculos()
      this.cadastrar()
    }
    else {
      this.calculos()
      this.editar()
    }

    this.nome = ""
    this.dataNascimento = ""
    this.valorHora = 0
    this.quantidadeHora = 0
    this.valeRefeicao = 0
    this.valeTrasnporte = 0
    this.planoSaude = 0
    this.salarioBruto = 0
    this.salarioLiquido = 0
    
  }
  cadastrar(): void {
    this.colaboradores.push(this.nome)
    this.datasNascimentos.push(this.dataNascimento)
    this.valoresHoras.push(this.valorHora)
    this.quantidadesHoras.push(this.quantidadeHora)
    this.valesRefeicoes.push(this.valeRefeicao)
    this.valesTrasnportes.push(this.valeTrasnporte)
    this.planosSaudes.push(this.planoSaude)
    this.salariosBrutos.push(this.salarioBruto)
    this.salariosLiquidos.push(this.salarioLiquido)
  }

  editar(): void {
    this.colaboradores[this.indiceParaEditar] = this.nome
    this.datasNascimentos[this.indiceParaEditar] = this.dataNascimento
    this.valoresHoras[this.indiceParaEditar] = this.valorHora
    this.quantidadesHoras[this.indiceParaEditar] = this.quantidadeHora
    this.valesRefeicoes[this.indiceParaEditar] = this.valeRefeicao
    this.valesTrasnportes[this.indiceParaEditar] = this.valeTrasnporte
    this.planosSaudes[this.indiceParaEditar] = this.planoSaude
    this.salariosBrutos[this.indiceParaEditar] = this.salarioBruto
    this.salariosLiquidos[this.indiceParaEditar] = this.salarioLiquido

    this.indiceParaEditar = -1
  }
  
  apagar(nomeColaborador:string): void {
    let indiceColaborador = this.colaboradores.indexOf(nomeColaborador)

    this.colaboradores.splice(indiceColaborador, 1)
    this.datasNascimentos.splice(indiceColaborador, 1)
    this.valoresHoras.splice(indiceColaborador, 1)
    this.quantidadesHoras.splice(indiceColaborador, 1)
    this.valesRefeicoes.splice(indiceColaborador, 1)
    this.valesTrasnportes.splice(indiceColaborador, 1)
    this.planosSaudes.splice(indiceColaborador, 1)
    this.salariosBrutos.splice(indiceColaborador, 1)
    this.salariosLiquidos.splice(indiceColaborador, 1)
  }

  preencherEditar(nomeColaborador:string, dataColaborador:string, valorHoraColaborador:number, quantidadeHoraColab:number, valeRefeicaoColab:number, valeTrasnporteColab:number, planoSaudeColab:number): void {
    this.indiceParaEditar = this.colaboradores.indexOf(nomeColaborador)

    this.nome = nomeColaborador
    this.dataNascimento = dataColaborador
    this.valorHora = valorHoraColaborador
    this.quantidadeHora = quantidadeHoraColab
    this.valeRefeicao = valeRefeicaoColab
    this.valeTrasnporte = valeTrasnporteColab
    this.planoSaude = planoSaudeColab
    
  }

  calculos(): void {
    this.salarioBruto = this.quantidadeHora * this.valorHora

    this.salarioLiquido = this.salarioBruto - this.valeTrasnporte - this.valeRefeicao - this.planoSaude
  }
}
