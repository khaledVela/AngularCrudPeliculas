import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetpeliculasComponent } from './getpeliculas/getpeliculas.component';
import { AuthcompComponent } from './authcomp/authcomp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetpeliculasComponent,AuthcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCRUDCss';
}
