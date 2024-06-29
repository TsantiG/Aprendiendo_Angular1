import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {
  mostrarImagen: boolean = false;

  toggleImagen() {
    this.mostrarImagen = !this.mostrarImagen;
  }

}
