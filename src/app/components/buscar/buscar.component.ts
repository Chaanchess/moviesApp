import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  peliculas:any[]=[];

  constructor(public peliculasServ: PeliculasService, private router: ActivatedRoute) { 
    this.router.params.subscribe(parametros=>{
      if(parametros['texto']){
        this.buscar(parametros['texto']);
      }
    })
  }

  ngOnInit(): void {
  }

  buscar(termino: string){

    if(termino.length==0){
      return;
    }
    this.peliculasServ.buscarPelicula(termino);
  }

}
