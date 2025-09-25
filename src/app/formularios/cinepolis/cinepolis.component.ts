import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = '';
  cantC: number = 0;
  cantB: number = 0;
  tarjetaC: string = '';
  costoBoleto: number = 12.00;
  res: string = '';


  descuento1(): void {
  if (this.cantB <= this.cantC * 7) {
    if (this.cantB > 5) {
      this.costoBoleto = this.costoBoleto * 0.85;
    }
  }
}
descuento2(): void {
  if (this.cantB <= this.cantC * 7) {
    if (this.cantB >= 3 && this.cantB <= 5) {
      this.costoBoleto = this.costoBoleto * 0.90;
    }
  }
}
descuento3(): void {
  if (this.tarjetaC === 'Si') {
    this.costoBoleto = this.costoBoleto * 0.90;
  }
}

Proceso(): void {
  if (this.cantB <= this.cantC * 7) {

    if (this.cantB > 5) {
      this.descuento1();
    } else if (this.cantB >= 3 && this.cantB <= 5) {
      this.descuento2();
    }
    if (this.tarjetaC === 'Si') {
      this.descuento3();
    }

   let valorFinal = this.cantB * this.costoBoleto;
      this.res = `El costo final para ${this.nombre} es: $${valorFinal.toFixed(2)}`;

    } else {
      this.res = ` No puedes comprar más de 7 boletos por persona, dile a tu compañero que redusca los boletos`;
    }
}


}
