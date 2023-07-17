import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})


export class Componente1Component {
  objeto:any=["uno","dos","tres"];
  superheroes: string[] = ["flash", "supergirl", "frost"];

  mostrarContenido: boolean = false;
  contenidoVisible: string = "";


  condicion:boolean=false;
  constructor(){
    
  }
  ver(){
    this.condicion=!this.condicion;
  }
  toggleContenido() {
    this.mostrarContenido = !this.mostrarContenido;
    this.contenidoVisible = this.mostrarContenido ? this.superheroes.join(', ') : "";
  }

  contraste: boolean = true;

  toggleContraste() {
    this.contraste = !this.contraste;
  }
  edad:any;
  mayor:string='mayor de edad';
  menor:string='menor de edad, no puedes acceder';


  esVegano: boolean = false;

  menuVegano: string[] = ['Ensalada vegana', 'Tofu a la plancha', 'Curry de vegetales'];
  menuCarne: string[] = ['Filete de ternera', 'Pollo al horno', 'Parrillada mixta'];



  tipoMenu: string = 'vegano';
  mostrar: boolean = false;
  menu: string[]=[];

  mostrarMenu() {
    this.mostrar = true;
    this.menu = this.tipoMenu === 'vegano' ? this.menuVegano : this.menuCarne;
  }
  
 
  

}
