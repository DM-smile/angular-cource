import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-top-rate-movies-page',
   standalone: true,
   templateUrl: './top-rate-movies-page.component.html',
   styleUrl: './top-rate-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent]
})
export class TopRateMoviesPageComponent {


   topRatedMovies: any[] = []


   constructor(private movieService: MovieService) { }

   ngOnInit(): void {
      this.topRatedMovies = this.movieService.getTopRatedMovies()
   }

}
