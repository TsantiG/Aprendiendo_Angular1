import { Component } from '@angular/core';
import { Persona} from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  persona:Persona[]=[
    {nombrep:'Ana', apellidop:'Soto', edadp:20, telefono:'1111111',correo:'ana@ya.com'},
    {nombrep:'Juan', apellidop:'Soto', edadp:30, telefono:'2222222',correo:'juan@ya.com'},
    {nombrep:'Luis', apellidop:'Perez', edadp:18, telefono:'3333333',correo:'luis@ya.com'},
    {nombrep:'Edison', apellidop:'Suarez', edadp:42, telefono:'4444444',correo:'edison@ya.com'}
  
  ];

}
