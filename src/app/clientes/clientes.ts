import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class ClientesComponent {
  clientes:string[] = ["Jorge Silva", "Abact Batatinha", "Ronaldo Souza"]
  cpfs:string[]=["123.456.789-10","098.765.432-01","192.384.576-67"]

  nome: string = "";
  cpf: string = ""

  indiceParaEditar: number = -1

  salvar(): void {
    if(this.indiceParaEditar === -1){
      this.cadastrar()
    }else{
      this.editar()
    }
    
    this.nome = ""
    this.cpf = ""
  }
  
  cadastrar(): void{
    this.clientes.push(this.nome)
    this.cpfs.push(this.cpf)

    alert("Cliente cadastrado com sucesso")
  }

  editar(): void {
    this.clientes[this.indiceParaEditar] = this.nome;
    this.cpfs[this.indiceParaEditar] = this.cpf;

    alert("Cliente alterado com sucesso")

    this.indiceParaEditar = -1
  }

  apagar(nomeCliente: string): void {
    let inidiceNomeCliente = this.clientes.indexOf(nomeCliente)
    
    this.clientes.splice(inidiceNomeCliente, 1)
    this.cpfs.splice(inidiceNomeCliente, 1)
  }

  preencherCampoParaEditar(nomeCliente:string, cpfCliente:string): void{
    this.indiceParaEditar = this.clientes.indexOf(nomeCliente)
    

    this.nome = nomeCliente
    this.cpf = cpfCliente
  }
}
