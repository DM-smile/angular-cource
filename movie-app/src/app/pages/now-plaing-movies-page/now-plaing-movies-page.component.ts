import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Router } from '@angular/router';
import { nowPlayingMovies } from '../../mock/mock-data';
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-now-plaing-movies-page',
   standalone: true,
   templateUrl: './now-plaing-movies-page.component.html',
   styleUrl: './now-plaing-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent]
})
export class NowPlaingMoviesPageComponent {

   nowPlaingMovies: any[] = []


   constructor(private movieService: MovieService) { }

   ngOnInit(): void {
      this.nowPlaingMovies = this.movieService.getNowPlayingMovies()
   }

}
