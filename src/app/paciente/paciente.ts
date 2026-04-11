import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  imports: [FormsModule],
  templateUrl: './paciente.html',
  styleUrl: './paciente.css',
})
export class PacienteComponent {

  nome : string = "";
  sobrenome: string = "";
  idade: number | null = null;
  anoNascimentoResultado: number | null = null;
  altura: number | null = null;
  peso: number | null = null;
  imcResultado: number | null = null;
  imcStatusResultado: string | null = null;

  apresentarStatus(): void {
    this.caucularImc()
    if(this.imcResultado === null) {
      return
    }

    if(this.imcResultado <18.5){
      this.imcStatusResultado = "Abaixo do peso"
    }
    else if(this.imcResultado < 25){
      this.imcStatusResultado = "Peso normal"
    }else if(this.imcResultado < 25){
      this.imcStatusResultado = "Sobrepeso"
    }else if(this.imcResultado < 30){
      this.imcStatusResultado = "obesidade grau I"
    }else if(this.imcResultado < 35){
      this.imcStatusResultado = "obesidade grau II"
    }else{
      this.imcStatusResultado = "obesidade grau III"
    }
  }

  caucularImc(): void{
    if(this.peso === null){
      alert("Peso deve ser preenchido");
      return
    }
    if(this.altura === null){
      alert("Altura deve ser preenchida")
      return
    }

    this.imcResultado = this.peso / (this.altura * this.altura)
  }

  get nomeCompleto() : string {
    return `${this.nome} ${this.sobrenome}`
  }

  apresentarAnoNascimento(): void {
    if (this.idade === null || this.idade <= 0){
      alert("Idade deve ser preenchida com uma idaed maior ou igual a 1")
      return
    }
    const anoAtual = new Date().getFullYear()
    this.anoNascimentoResultado = anoAtual - this.idade;
  }
}
