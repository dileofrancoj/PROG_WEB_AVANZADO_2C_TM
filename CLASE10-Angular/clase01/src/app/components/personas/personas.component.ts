import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  nombre :string;
  apellido :string;
  edades : number [];
  suma : number = 0;
  curso : any [] = [];
  cantidadPersonas : number;
  
  sumarEdades(){
    this.suma = 0; // averiguar.

    for(let i=0; i<this.edades.length;i++) {
      this.suma =this.suma + this.edades[i]
    }
    return this.suma; 
  }

  constructor() {
    // cargarmos las propiedades dentro del constructor
    console.log("Ey, soy la primer funcion que se ejecuta");
    this.nombre = 'franquito'
    this.edades = [28,42,10,41,51];
    // [0 -> ,1 -> ]
    this.curso = [
      {
        id : 1,
        nombre : 'franco',
        apellido : ' di leo',
        correo : 'dileo.francoj@gmail.com',
        edad : 25
      },
      {
        id : 2,
        nombre : 'Ari',
        apellido : 'Saez',
        correo : 'ariel@nodorojo.com',
        edad : 26
      },
      {
        id : 3,
        nombre : 'Mir',
        apellido : 'Leg',
        correo : 'mirleg@gmail.com',
        edad : 200
      }
    ]

    this.cantidadPersonas = this.curso.length; 
    console.log(this.cantidadPersonas);
  }


  ngOnInit() {
    console.log("Ey , soy la segunda funcion que se ejecuta.")
  }

}
