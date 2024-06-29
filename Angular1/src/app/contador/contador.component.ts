import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //variables
  usuario: string = 'jdsuarez';
  edad:number = 27;
  aprendiz:boolean = true;
  nose:any = 4;
  numero:number = 0;
  srt:string="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         

  //objeto
   persona: Persona= {
    nombrep:'Juand',
    apellidop: "suarez",
    edadp:35,
    telefono: '999999',
    correo: 'crespy20@getMaxListeners.com'
  }

  incrementar(){
    this.numero+=1
    if(this.numero==11){

      this.numero=1;
      
      

    }
    else if(this.numero==1){
      this.srt='https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
    else if(this.numero==2){
      this.srt='https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
    else if (this.numero==3){
      this.srt='https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    } 
    else if (this.numero==4){
      this.srt='https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    } 
    else if (this.numero==5){
      this.srt='https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==6){
      this.srt='https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==7){
      this.srt='https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==8){
      this.srt='https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==9){
      this.srt='https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==10){
      this.srt='https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
  
  
  }
    
  disminuir(){
    this.numero--
    if(this.numero==0){

      this.numero=10;}
    if(this.numero==1){
      this.srt='https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
    else if(this.numero==2){
      this.srt='https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
    else if (this.numero==3){
      this.srt='https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    } 
    else if (this.numero==4){
      this.srt='https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    } 
    else if (this.numero==5){
      this.srt='https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==6){
      this.srt='https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==7){
      this.srt='https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==8){
      this.srt='https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==9){
      this.srt='https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
    else if (this.numero==10){
      this.srt='https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
  }

}
