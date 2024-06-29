import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  movieForm: FormGroup;
  movieData: any = {};  // Cambiado a objeto para facilitar el acceso por ID
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      movieId: ['', [Validators.required, Validators.min(1), Validators.max(6)]],
      movieName: ['', Validators.required],
      movieDetails: ['', Validators.required],
      movieGenre: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = this.movieForm.value;
    const movieId = formData.movieId;

    // Agregar la imagen seleccionada al objeto de datos
    formData.movieImage = this.selectedImage;

    // Asignar los datos de la película al ID correspondiente
    this.movieData[movieId] = formData;

    // Limpiar el formulario y la imagen seleccionada
    this.movieForm.reset();
    this.selectedImage = null;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result;
    };
    reader.readAsDataURL(file);
  }
}