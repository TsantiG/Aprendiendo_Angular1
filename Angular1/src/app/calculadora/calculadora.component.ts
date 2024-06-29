import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  primerNumero:number | undefined;
  segundoNumero: number | undefined;
  operacion: string = 'suma'; // Por defecto, la operación es suma
  resultado: number |null=null; // Para mostrar el resultado

  calcular() {
    if (this.primerNumero === undefined || this.segundoNumero === undefined) {
      alert('Por favor, ingrese ambos números.');
      return;
    }
    switch (this.operacion) {
      case 'suma':
        this.resultado = this.primerNumero + this.segundoNumero;
        break;
      case 'resta':
        this.resultado = this.primerNumero - this.segundoNumero;
        break;
      case 'multiplicacion':
        this.resultado = this.primerNumero * this.segundoNumero;
        break;
      case 'division':
        if (this.segundoNumero === 0) {
          alert('No se puede dividir por cero');
          return;
        }
        this.resultado = this.primerNumero / this.segundoNumero;
        break;
      default:
        alert('Operación no válida');
        break;
      }
  }


}
