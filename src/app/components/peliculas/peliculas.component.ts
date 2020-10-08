import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  pelicula:any;
  regresar: string="";

  constructor(private peliculaServ: PeliculasService, private route: ActivatedRoute) { 
    this.route.params.subscribe(parametros=>{
      this.regresar = parametros['pag'];
      this.peliculaServ.getPelicula(parametros['id'])
        .subscribe(data=>{
          this.pelicula = data;
          console.log(data);
        })
    })
    
  }

  ngOnInit(): void {
  }

}
