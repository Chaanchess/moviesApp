import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "83592cf201c77b7edd08f1c7bcce5bb7";
  private urlMoviedb: string ="https://api.themoviedb.org/3";

  private esSerie: boolean;

  peliculas:any[]=[];

  constructor( private http: HttpClient) {

   }


  getPopulares(){
    this.esSerie=false;
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    

    return this.http.get(url);
  }

  buscarPelicula(query: string){
    this.esSerie=false;
    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apikey}&language=es&query=${query}`;

    return this.http.get(url).subscribe(data=>{
      this.peliculas = data['results'];
      console.log(data['results']);
    });
  }

  getCartelera(){
    this.esSerie=false;

    // let desde = new Date();
    // let hasta = new Date();
    // hasta.setDate(hasta.getDate()+7);

    // let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    // let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;


    let url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}&language=es`;
    return this.http.get(url);
  }

  getSeriesPopulares(){
    this.esSerie=true;
    let url = `${this.urlMoviedb}/movie/top_rated?api_key=${this.apikey}&language=es`;
    return this.http.get(url);
  }

  getPelicula(id){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    return this.http.get(url);
  }

}
