import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;

  apresentarMensagem() : void{
    alert("abacate")
  }

  somar() : void {
    let resultado : number = this.numero1 + this.numero2
    alert(`Soma: ${resultado}`)
  }

  subtrair() : void {
    let resultado : number = this.numero1 - this.numero2;
    alert(`Subtraçã: ${resultado}`)
  }

  multiplicar() : void {
    let resultado : number = this.numero1 * this.numero2
    alert(`Multiplicação: ${resultado}`) 
  }

  dividir() : void {
    let resultado : number = this.numero1 / this.numero2;
    alert(`Divisão: ${resultado}`)
  }
}
