import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-favorite-movies',
   standalone: true,
   imports: [HeaderComponent, MovieCardComponent, CommonModule],
   templateUrl: './favorite-movies.component.html',
   styleUrl: './favorite-movies.component.scss'
})
export class FavoriteMoviesComponent implements OnInit {
   favoriteMovies: any
   constructor(private movieService: MovieService) { }

   ngOnInit() {
      this.favoriteMovies = this.movieService.getToFavoritesMovie()
   }
}
