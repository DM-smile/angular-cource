import { Component, Input } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { CommonModule } from '@angular/common';
import { popularMovies } from '../../mock/mock-data';

@Component({
   selector: 'app-movie-list',
   standalone: true,
   templateUrl: './movie-list.component.html',
   styleUrl: '../../app.component.scss',
   imports: [MovieCardComponent, CommonModule]
})
export class MovieListComponent {

   movies = popularMovies

   public favoriteMovies: any = []
   public watchListMovies: any = []

   handleAddToFavorite(item: any) {
      this.favoriteMovies.push(item)
   }

   handleAddToWatchList(item: any) {
      this.watchListMovies.push(item)
   }
}
