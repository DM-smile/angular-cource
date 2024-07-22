import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-watch-list-movies',
   standalone: true,
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent],
   templateUrl: './watch-list-movies.component.html',
   styleUrl: './watch-list-movies.component.scss'
})
export class WatchListMoviesComponent implements OnInit {
   watchListMovies: any
   constructor(private movieService: MovieService) { }

   data: any;

   ngOnInit() {
      this.watchListMovies = this.movieService.getToWatchList()
   }
}