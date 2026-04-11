import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imovel',
  imports: [FormsModule],
  templateUrl: './imovel.html',
  styleUrl: './imovel.css',
})
export class ImovelComponent {
  area: number | null = null;
  valor: number | null = null;
  valorMetro: number | null = null

  mostrarValorMetroQuadrado(): void {
  if(this.area === null){
    alert("Área tem que ser preenchida")
    return
  }
  if(this.valor === null){
    alert("Valor do metro quadrado tem que ser prenchido")
    return
  }

    this.valorMetro = this.valor / this.area
  }
}
