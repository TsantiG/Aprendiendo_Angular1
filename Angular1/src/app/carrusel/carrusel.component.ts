import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  numero:number=1;

  incrementar(){
    this.numero+=1
    if(this.numero==11){
     }
    else if(this.numero==1){}
  }
    
  disminuir(){
    this.numero--
    
}


}

