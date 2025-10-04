// resistencias.component.ts

import { Component } from '@angular/core';
import { CalculadoraResistencia } from './atributos';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css'],
  standalone: false
})
export class ResistenciaComponent {
  public calculadora: CalculadoraResistencia = new CalculadoraResistencia();
  constructor() { }
}
