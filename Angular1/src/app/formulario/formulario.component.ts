import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  abrirAlerta:boolean=false;
  mostrar_en_consola(nommbre:string){
    console.log(nommbre)
    this.abrirAlerta=true


  }


}
