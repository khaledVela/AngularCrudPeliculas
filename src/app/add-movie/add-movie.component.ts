import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent implements OnInit{
newMovie: any={};
  constructor(private router:Router, private route: ActivatedRoute) { }
  generos: any=[];
  clasificaciones: any=[];
  private PostService = inject(PostService);
  movieId: string='';
  movie: any=[];

  ngOnInit(): void {
    this.loadGeneros();
    this.loadClasificaciones();
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      console.log('ID de la película:', this.movieId);
    });
    if(this.movieId!=undefined){
      this.loadPeli(this.movieId);
    }
  }

  loadPeli(id: string){
    this.PostService.getPeli(id).subscribe((posts: any) => {
      console.log(posts);
      this.movie = posts;
    });
  }

  loadGeneros(){
    this.PostService.getGeneros().subscribe((posts: any) => {
      console.log(posts);
      this.generos = posts;
    });
  }

  loadClasificaciones(){
    this.PostService.getClasificaciones().subscribe((posts: any) => {
      console.log(posts);
      this.clasificaciones = posts;
    });
  }

  atras(){
    this.router.navigate(['movie']);
  }

  createMovie(){
    const nombre = document.getElementById("nombre") as HTMLInputElement;
    const genero = document.getElementById("generos") as HTMLInputElement;
    const clasificacion = document.getElementById("clasificacion") as HTMLInputElement;
    const fecha_estreno = document.getElementById("fecha_estreno") as HTMLInputElement;
    const sinonpsis = document.getElementById("sinopsis") as HTMLInputElement;
    const portada = document.getElementById("portada") as HTMLInputElement;
    const formdata = new FormData();
    formdata.append('nombre', nombre.value);
    formdata.append('genero_id', genero.value);
    formdata.append('clasificacion_id', clasificacion.value);
    formdata.append('fecha_estreno', fecha_estreno.value);
    formdata.append('sinonpsis', sinonpsis.value);
    if (portada.files) {
      formdata.append('portada', portada.files[0]);
    }

    if(this.movieId!=undefined){
      this.PostService.updatePeli(parseInt(this.movieId),formdata).subscribe((posts: any) => {
        console.log(posts);
        this.router.navigate(['movie']);
      });
    }
    else{
      this.PostService.addPeli(formdata).subscribe((posts: any) => {
        console.log(posts);
        this.router.navigate(['movie']);
      });
    }
  }

}
