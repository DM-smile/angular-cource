import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { MovieService } from '../../services/movie.service';


@Component({
   selector: 'app-popular-movies-page',
   standalone: true,
   templateUrl: './popular-movies-page.component.html',
   styleUrl: './popular-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent]
})
export class PopularMoviesPageComponent {

   popularMovies: any[] = []


   constructor(private movieService: MovieService) { }

   ngOnInit(): void {
      this.popularMovies = this.movieService.getPopularMovies()
   }

}
