import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})
export class Formulario3Component {
 
  get nombre(){
    return this.FormUsuario.get('nombre') as FormControl;
  }
  get apellido(){
    return this.FormUsuario.get('apellido') as FormControl;
  }

  get correo(){
    return this.FormUsuario.get('correo') as FormControl;
  }
  

  // FormUsuario = new FormGroup({ 
    
  //   'nombre' : new FormControl('',Validators.required),
  //   'correo' : new FormControl(['',Validators.required, Validators.email]),
  //   'apellido' : new FormControl('',Validators.required)

  // });
// otra opcion 2
  constructor(private fb:FormBuilder){
    
  }

  FormUsuario = this.fb.group({
    'nombre' : ['',Validators.required],
    'correo' : ['',[Validators.required, Validators.email]],
    'apellido' : ['',Validators.required]
  })

  procesar(){
    console.log(this.FormUsuario.value);
  }
}
