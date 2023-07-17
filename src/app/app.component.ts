import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'directivas';

  valores : any[]  = [true, 5, false, "hola", "adios", 2];

  //ejemploArray : tipodatos[] = [index0, index1, index2, index3, index4, index5..... n ]

  edad! : number //aserción de asignación definitiva
  variableArray : any[] = ["soy un string", 3, true]
  numero? : number | undefined //Diferentes formas de indicar que el tipo de dato es opcional (puede variar entre los definidos, y si solo se define uno, la segunda opción será siempre undefined)
  resultado : boolean = this.valores[3] > this.valores[4]
  combinadostrue: boolean = this.valores[0] || this.valores[2]
  combinadosfalse: boolean = this.valores[0] == this.valores[2]
  combinadosfalse1: boolean = this.valores[0] && this.valores[2]
  suma: number = this.valores[1] + this.valores[5]
  resta: number = this.valores[1] - this.valores[5]
  multiplicacion: number = this.valores[1] * this.valores[5]
  modulo: number = this.valores[1] % this.valores[5]
  division: number = this.valores[1] / this.valores[5]




  ngOnInit(){
 /* Utilizamos este método para poder ejecutar código cuando el componente carga por primera vez. Normalmente se usa el constructor para inicializar variables, y el ngOnInit para inicializar o ejecutar tareras que tienen que ver con Angular. Todo esto lo podemos poner directamente en el constructor y funcionaría de la misma manera, pero no está de más tener más separado el código para que sea más mantenible.*/
 console.log (this.resultado )
 console.log (this.combinadostrue )
 console.log (this.combinadosfalse )
 console.log (this.combinadosfalse1 )
 console.log (this.suma )
 console.log ( this.resta)
 console.log ( this.multiplicacion)
 console.log ( this.modulo)
 console.log ( this.division)
  }
  people: any[] = [
    {
    //Este array contiene una iteración de objetos
      "name": "Douglas Pace", //name es una propiedad
      "edad": 10
    },
    {
      "name": "Mcleod Mueller"//Los objetos en js pueden contener propiedades
    },
    {
      "name": "Day Pepe"//Los objetos en js pueden contener propiedades
    },
    {
      "name": "Cock Hehe"//Los objetos en js pueden contener propiedades
    },
  ];

  animales: any[] = [
    { titulo: 'Carnívoros', lista: ['León', 'Tigre', 'Lobo', 'Halcón', 'Cocodrilo'] },
    { titulo: 'Herbívoros', lista: ['Cabra', 'Ciervo', 'Vaca', 'Conejo', 'Canguro'] }
  ];
  
  
}

