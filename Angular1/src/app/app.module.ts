import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ImagenComponent } from './imagen/imagen.component';
import { LibrosComponent } from './libros/libros.component';
import { Formulario3Component } from './formulario3/formulario3.component';
import { PeliculasComponent } from './peliculas/peliculas.component';




@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    ImagenesComponent,
    CarruselComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    CalculadoraComponent,
    ImagenComponent,
    LibrosComponent,
    Formulario3Component,
    PeliculasComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule, ReactiveFormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
