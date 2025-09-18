import { Component } from '@angular/core';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {

  listFilter:string='';
  muestraImg:boolean=true;

  showImage(){
    this.muestraImg=!this.muestraImg;
  }
  heroes: Heroes[]=[
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre :"Goku",
      descripcion:"Kakaroto",
      race:"Saiyan",
      Ki:10000
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre :"Vegeta",
      descripcion:"Principe de los Saiyan",
      race:"Saiyan",
      Ki:9000
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre :"Piccolo",
      descripcion:"Protector de Namekuseyin",
      race:"Namekuseyin",
      Ki:7000
    },
    {
      imagen: "https://dragonball-api.com/characters/bulma.webp",
      nombre :"Bulma",
      descripcion:"Esposa de vegeta",
      race:"Humano",
      Ki:2
    }
  ]

}
