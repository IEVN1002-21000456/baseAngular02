import { Component } from '@angular/core';
// tiene 4 variable selector, ejecutar el componente mandar llamar,template:manda a llamar un archivo que s eejecuta
//standalone:
//style invoca el archivo de estilos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
//la delcaracion de una clase, angular se genera apartir de clases
export class AppComponent {
  title = 'baseAngular02';
  duplicaNumero(numero:number):number{
    return numero*2;
  }
  pelicula={
    titulo:'Batman',
    anio: new Date(),
    precio: 2500
  }
}
