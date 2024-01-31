import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [ 
    { 
        path: '', 
        redirectTo: 'auth', 
        pathMatch: 'full'
    },
    {
        path: 'movie',
        loadComponent:() => import('./getpeliculas/getpeliculas.component').then(m => m.GetpeliculasComponent)
    },
    {
        path: 'auth',
        loadComponent:() => import('./authcomp/authcomp.component').then(m => m.AuthcompComponent)
    },
    {
        path: 'moviedetail/:id',
        loadComponent:() => import('./detailmovie/detailmovie.component').then(m => m.DetailmovieComponent)
    },
    {
        path: 'addmovie',
        loadComponent:() => import('./add-movie/add-movie.component').then(m => m.AddMovieComponent)
    },
    {
        path: 'editmovie/:id',
        loadComponent:() => import('./add-movie/add-movie.component').then(m => m.AddMovieComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }