import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getpeliculas',
  standalone: true,
  imports: [],
  templateUrl: './getpeliculas.component.html',
  styleUrl: './getpeliculas.component.css'
})
export class GetpeliculasComponent implements OnInit{
  constructor(private router:Router) { }

  private PostService = inject(PostService);
  pelis: any=[];
  generos: any=[];
  
  ngOnInit(): void {
    this.loadPelis();
    this.loadGeneros();
  }

  loadPelis(){
    this.PostService.getPelis().subscribe((posts: any) => {
      console.log(posts);
      this.pelis = posts;
    });
  }

  loadGeneros(){
    this.PostService.getGeneros().subscribe((posts: any) => {
      console.log(posts);
      this.generos = posts;
    });
  }

  onSearch(){
      const inputValue = document.getElementById("mibuscador")
      if (inputValue) {
        console.log('Valor del campo de búsqueda:', (inputValue as HTMLInputElement).value);
        if((inputValue as HTMLInputElement).value == ''){
          this.loadPelis();
        } else {
          this.PostService.getPelis().subscribe((posts: any) => {
            this.pelis = posts.filter((peli: any) => peli.nombre.toLowerCase().includes((inputValue as HTMLInputElement).value.toLowerCase()));
          });
        }
      } else {
        console.log('No element with id "mibuscador" found');
      }
  }

  onFilter(){
    const genero = document.getElementById("generos")
    if (genero) {
      console.log('Valor del campo de filtro:', (genero as HTMLInputElement).value);
      if((genero as HTMLInputElement).value == '0'){
        this.loadPelis();
      } else {
        this.PostService.getPelis().subscribe((posts: any) => {
          this.pelis = posts.filter((peli: any) => peli.genero.id == (genero as HTMLInputElement).value);
        });
      }
    } else {
      console.log('No element with id "generos" found');
    }
  }

  salir(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  verDetalles(id: number){
    console.log('Ver detalle de la película con id:', id);
    this.router.navigate(['/moviedetail/' + id]);
  }

  eliminarPeli(id: number){
    console.log('Eliminar película con id:', id);
    this.PostService.deletePeli(id).subscribe((posts: any) => {
      console.log(posts);
      this.loadPelis();
    });
  }

  editarPeli(id: number){
    console.log('Editar película con id:', id);
    this.router.navigate(['/editmovie/' + id]);
  }

  anadirPeli(){
    console.log('Añadir película');
    this.router.navigate(['/addmovie']);
  }
}
