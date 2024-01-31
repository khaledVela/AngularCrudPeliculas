import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authcomp',
  standalone: true,
  imports: [],
  templateUrl: './authcomp.component.html',
  styleUrl: './authcomp.component.css'
})
export class AuthcompComponent implements OnInit{
  private PostService = inject(PostService);

  constructor(private router:Router) { }
  ngOnInit(): void {

  }

  login(){
    const usernameElement = document.getElementById("username");
    const passwordElement = document.getElementById("password");
    
    if (usernameElement && passwordElement) {
      const username = (usernameElement as HTMLInputElement).value;
      const password = (passwordElement as HTMLInputElement).value;
      const dato = {
        'username':username, 
        'password':password
      };
      this.PostService.login(dato).subscribe((posts: any) => {
        console.log(posts);
        localStorage.setItem('token', posts.access);
        this.router.navigate(['/movie']);
      });
    } else {
      console.log('Username or password element not found');
    }
  }
}
