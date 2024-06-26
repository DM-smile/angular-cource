import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-favorite-movies',
   standalone: true,
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent],
   templateUrl: './favorite-movies.component.html',
   styleUrl: './favorite-movies.component.scss'
})
export class FavoriteMoviesComponent implements OnInit {

   constructor(private route: ActivatedRoute) { }


   public favoriteMovies: any = []
   public watchListMovies: any = []
   data: any;

   ngOnInit() {
      this.route.queryParams.subscribe((params: { [x: string]: any; }) => {
         const dataString = params['data'];
         this.favoriteMovies = dataString ? JSON.parse(dataString) : [];
      });
   }

   handleAddToFavorite(item: any) {
      if (!this.favoriteMovies.includes(item))
         this.favoriteMovies.push(item)
      console.log(this.favoriteMovies)
   }

   handleAddToWatchList(item: any) {
      if (!this.watchListMovies.includes(item))
         this.watchListMovies.push(item)
   }
}
