
export interface ColorBanda {
  nombre: string;
  valor: number;
  cssColor: string;
}


export class CalculadoraResistencia {

  public coloresBanda1y2: ColorBanda[] = [
    { nombre: 'Negro', valor: 0, cssColor: '#000000' },
    { nombre: 'Marrón', valor: 1, cssColor: '#964B00' },
    { nombre: 'Rojo', valor: 2, cssColor: '#FF0000' },
    { nombre: 'Naranja', valor: 3, cssColor: '#FFA500' },
    { nombre: 'Amarillo', valor: 4, cssColor: '#FFFF00' },
    { nombre: 'Verde', valor: 5, cssColor: '#008000' },
    { nombre: 'Azul', valor: 6, cssColor: '#0000FF' },
    { nombre: 'Violeta', valor: 7, cssColor: '#800080' },
    { nombre: 'Gris', valor: 8, cssColor: '#808080' },
    { nombre: 'Blanco', valor: 9, cssColor: '#FFFFFF' }
  ];


  public coloresMultiplicador: ColorBanda[] = [
    { nombre: 'Negro', valor: 0, cssColor: '#000000' },
    { nombre: 'Marrón', valor: 1, cssColor: '#964B00' },
    { nombre: 'Rojo', valor: 2, cssColor: '#FF0000' },
    { nombre: 'Naranja', valor: 3, cssColor: '#FFA500' },
    { nombre: 'Amarillo', valor: 4, cssColor: '#FFFF00' },
    { nombre: 'Verde', valor: 5, cssColor: '#008000' },
    { nombre: 'Azul', valor: 6, cssColor: '#0000FF' },
    { nombre: 'Violeta', valor: 7, cssColor: '#800080' },
    { nombre: 'Oro', valor: -1, cssColor: '#FFD700' },
    { nombre: 'Plata', valor: -2, cssColor: '#C0C0C0' }
  ];


  public coloresTolerancia: ColorBanda[] = [
    { nombre: 'Oro', valor: 5, cssColor: '#FFD700' },
    { nombre: 'Plata', valor: 10, cssColor: '#C0C0C0' },

  ];

  public seleccionBanda1: ColorBanda;
  public seleccionBanda2: ColorBanda;
  public seleccionMultiplicador: ColorBanda;
  public seleccionTolerancia: ColorBanda;


  public resultadosVisibles: boolean = false;


  constructor() {

    this.seleccionBanda1 = this.coloresBanda1y2[1];
    this.seleccionBanda2 = this.coloresBanda1y2[0];
    this.seleccionMultiplicador = this.coloresMultiplicador[0];
    this.seleccionTolerancia = this.coloresTolerancia[6];
  }


  public getValor(): number {
    const digito1 = this.seleccionBanda1.valor;
    const digito2 = this.seleccionBanda2.valor;
    const exponente = this.seleccionMultiplicador.valor;

    const valorDigitos = (digito1 * 10) + digito2;
    const valorResistencia = valorDigitos * Math.pow(10, exponente);

    return valorResistencia;
  }

  public getValorMaximo(): number {
    const valorNominal = this.getValor();
    const toleranciaDecimal = this.seleccionTolerancia.valor / 100;
    return valorNominal * (1 + toleranciaDecimal);
  }


  public getValorMinimo(): number {
    const valorNominal = this.getValor();
    const toleranciaDecimal = this.seleccionTolerancia.valor / 100;
    return valorNominal * (1 - toleranciaDecimal);
  }


  public getValorFormateado(valor: number): string {
    if (valor >= 1000000) {
      return (valor / 1000000).toFixed(2) ;
    } else if (valor >= 1000) {
      return (valor / 1000).toFixed(2);
    } else {
      return valor.toFixed(2);
    }
  }
  public procesarCalculo(): void {
    this.resultadosVisibles = true;
  }
}
