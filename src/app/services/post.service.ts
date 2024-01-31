import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://127.0.0.1:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class PostService {
private http = inject(HttpClient);

  constructor() { }

  login(data: any){
    return this.http.post(BASE_URL + 'token/', data);

  }

  getPelis(){
    return this.http.get(BASE_URL + 'peliculas');
  }

  getPeli(id: string){
    return this.http.get(BASE_URL + 'peliculas/' + id);
  }

  getGeneros(){
    return this.http.get(BASE_URL + 'generos');
  }

  getClasificaciones(){
    return this.http.get(BASE_URL + 'clasificaciones');
  }

  postPeli(data: any){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(BASE_URL + 'peliculas/', data, {headers});
  }

  deletePeli(id: number){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.delete(BASE_URL + 'peliculas/' + id, {headers});
  }

  updatePeli(id: number, data: any){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put(BASE_URL + 'peliculas/' + id + "/", data, {headers});
  }

  addPeli(data: any){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(BASE_URL + 'peliculas/', data, {headers});
  }
}
