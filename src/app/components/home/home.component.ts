import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pelisCartelera: any[] = [];

  populares: any[] = [];

  seriesPopulares: any[] = [];

  constructor(private peliculaSer: PeliculasService) {
    this.peliculaSer.getCartelera().subscribe((data: any) => {
      this.pelisCartelera = data['results'];
      console.log(data['results']);
    });

    this.peliculaSer.getPopulares().subscribe((data: any) => {
      this.populares = data['results'];
      console.log(data['results']);
    });

    this.peliculaSer.getSeriesPopulares().subscribe((data: any) => {
      this.seriesPopulares = data['results'];
      console.log(data['results']);
    });
  }
}
