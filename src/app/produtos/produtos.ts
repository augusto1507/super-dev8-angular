import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class ProdutosComponent {

  produtos:string[] = ["arroz", "feijão", "batata"]
  quantidades:number[] = [10, 20, 15]
  valores:number[] = [15, 34, 28]

  nome: string = ""
  quantidade: number = 0
  valor: number = 0

  indiceParaEditar: number = -1

  salvar(): void {
    if(this.indiceParaEditar === -1){
      this.cadastra()
    }else{
      this.editar()
    }

    this.nome = ""
    this.quantidade = 0
    this.valor = 0
  }

  cadastra(): void{
    this.produtos.push(this.nome)
    this.quantidades.push(this.quantidade)
    this.valores.push(this.valor)

    alert("produto cadastrado com sucesso")
  }

  apagar(nomeProduto: string): void {
    let inidiceNomeProduto = this.produtos.indexOf(nomeProduto)

    this.produtos.splice(inidiceNomeProduto, 1)
    this.quantidades.splice(inidiceNomeProduto, 1)
    this.valores.splice(inidiceNomeProduto, 1)
  }

  editar(): void {
    this.produtos[this.indiceParaEditar] = this.nome
    this.quantidades[this.indiceParaEditar] = this.quantidade
    this.valores[this.indiceParaEditar] = this.valor

    alert("produto alterado com sucesso")

    this.indiceParaEditar = -1
  }

  preencherEditar(nomeProduto: string, quantidadeProduto:number, valorProduto:number): void{
    this.indiceParaEditar = this.produtos.indexOf(nomeProduto)

    this.nome = nomeProduto
    this.quantidade = quantidadeProduto
    this.valor = valorProduto
  }
}


