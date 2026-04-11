import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { __addDisposableResource } from 'tslib';
import { PacienteComponent } from './paciente/paciente';
import { ImovelComponent } from './imovel/imovel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, PacienteComponent, ImovelComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-ng');

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
