import { Component } from '@angular/core';



@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  libros = [
    {
      id: 1,
      nombre: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      descripcion: 'Novela que narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.',
      imagen: 'https://d21v1viycn5ktl.cloudfront.net/wp-content/uploads/2019/06/luisa.jpg'
    },
    {
      id: 2,
      nombre: '1984',
      autor: 'George Orwell',
      descripcion: 'Distopía que describe una sociedad totalitaria controlada por un partido político único.',
      imagen: 'https://m.media-amazon.com/images/I/61NAx5pd6XL._SY445_SX342_.jpg'
    },
    {
      id: 3,
      nombre: 'El color que cayó del cielo',
      autor: 'H.P. Lovecraft',
      descripcion: 'Historia que gira en torno a un meteorito que cae en una granja, y los terribles efectos que tiene en la familia que la habita y en la tierra que la rodea.',
      imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b7/7f/b77f4049f4c402785ec29f312c7fef48.jpg'
    },
    {
      id: 4,
      nombre: 'El psicoanalista',
      autor: 'John Katzenbach',
      descripcion: 'Thriller psicológico sobre un psicoanalista que se enfrenta a un paciente que lo lleva a una serie de desafíos mortales.',
      imagen: 'https://libreriaebook.com/cdn/shop/files/5_329128cd-1e36-4149-b763-b5e95884b89b.png?v=1701291240&width=600'
    },
    {
      id: 5,
      nombre: 'El misterio de Salem',
      autor: 'Stephen King',
      descripcion: 'Novela de terror que cuenta la historia de un escritor que regresa a su ciudad natal y descubre que algo maligno está ocurriendo.',
      imagen: 'https://www.lavanguardia.com/peliculas-series/images/serie/poster/1979/11/w780/tfVZ1eVdDUTS0MAI2vOvPy3vGgv.jpg'
    },
    {
      id: 6,
      nombre: 'La chica del tren',
      autor: 'Paula Hawkins',
      descripcion: 'Thriller psicológico que sigue la historia de una mujer que se obsesiona con una pareja que ve desde el tren todos los días.',
      imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/66/fd/66fd23ee27313490b22cbef05d58bb08.jpg'
    }
  ];


}
