import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaboradores',
  imports: [FormsModule],
  templateUrl: './colaboradores.html',
  styleUrl: './colaboradores.css',
})
export class ColaboradoreComponent {
  colaboradores: string[] = ["Lorenzo chatão"]
  datasNacsimentos: string[] = ["17/04/2001"]

  nome: string = ""
  dataNascimento: string = ""

  indiceParaEditar: number = -1

  salvar(): void {
    if (this.indiceParaEditar === -1) {
      this.cadastrar()
    }
    else {
      this.editar()
    }
    
  }
  cadastrar(): void {
    this.colaboradores.push(this.nome)
    this.datasNacsimentos.push(this.dataNascimento)
  }

  editar(): void {
  }
  
  apagar(nomeColaborador:string): void {
    let indiceColaborador = this.colaboradores.indexOf(nomeColaborador)

    this.colaboradores.splice(indiceColaborador, 1)
    this.datasNacsimentos.splice(indiceColaborador, 1)
  }
}
