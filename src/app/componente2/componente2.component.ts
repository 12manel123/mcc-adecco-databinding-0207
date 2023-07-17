import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  valores: any[] = [true, 5, false, "hola", "adios", 2];
  textoMayor: string = '';
  resultadoTrue: boolean = false;

  determinarElementoTextoMayor() {
    let texto1 = this.valores[3];
    let texto2 = this.valores[4];

    if (texto1 > texto2) {
      this.textoMayor = `${texto1} es mayor que ${texto2}`;
    } else if (texto1 < texto2) {
      this.textoMayor = `${texto2} es mayor que ${texto1}`;
    } else {
      this.textoMayor = "Los textos son iguales";
    }
  }

  determinarOperadoresBooleanos() {
    const valor1 = this.valores[0];
    const valor2 = this.valores[2];

    this.resultadoTrue = valor1 && valor2;
  }

  determinarOperacionesMatematicas() {
    const numero1 = this.valores[1];
    const numero2 = this.valores[5];

    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;
    const modulo = numero1 % numero2;

    console.log(`Suma: ${suma}`);
    console.log(`Resta: ${resta}`);
    console.log(`Multiplicación: ${multiplicacion}`);
    console.log(`División: ${division}`);
    console.log(`Módulo: ${modulo}`);
  }
}
