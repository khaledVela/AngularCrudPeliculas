import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailmovie',
  standalone: true,
  imports: [],
  templateUrl: './detailmovie.component.html',
  styleUrl: './detailmovie.component.css'
})
export class DetailmovieComponent implements OnInit{
  constructor(private router:Router, private route: ActivatedRoute) { }

  private PostService = inject(PostService);
  movieId: string='';
  movie: any=[];


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      console.log('ID de la película:', this.movieId);
    });
    this.loadPeli(this.movieId);
  }

  loadPeli(id: string){
    this.PostService.getPeli(id).subscribe((posts: any) => {
      console.log(posts);
      this.movie = posts;
    });
  }

  atras(){
    this.router.navigate(['movie']);
  }
}
