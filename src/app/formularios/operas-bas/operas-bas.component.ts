import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1: string="";
  num2: string="";
  res: string="";
  operacion:string="";

  Sumar():void{
    this.res=(parseInt(this.num1)+parseInt(this.num2)).toString();
  }

  Restar():void{
    this.res=(parseInt(this.num1)-parseInt(this.num2)).toString();
  }
  Multiplicar():void{
    this.res=(parseInt(this.num1)*parseInt(this.num2)).toString();
  }
  Dividir():void{
    this.res=(parseInt(this.num1)/parseInt(this.num2)).toString();
  }

  Calcular():void{
    switch (this.operacion) {
      case 'sumar':
        this.Sumar();
        break;
      case 'restar':
        this.Restar();
        break;
      case 'multiplicar':
        this.Multiplicar();
        break;
      case 'dividir':
        this.Dividir();
        break;
      default:
        this.res = 'Selecciona una operación';
        break;
    }
  }

}
