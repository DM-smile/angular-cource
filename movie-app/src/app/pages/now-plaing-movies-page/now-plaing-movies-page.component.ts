import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Router } from '@angular/router';
import { nowPlayingMovies } from '../../../assets/mock/mock-data';

@Component({
   selector: 'app-now-plaing-movies-page',
   standalone: true,
   templateUrl: './now-plaing-movies-page.component.html',
   styleUrl: './now-plaing-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent]
})
export class NowPlaingMoviesPageComponent {

   constructor(private router: Router) {

   }

   redirectToDetailsPage(id: string) {
      this.router.navigate([`movie/:${id}`])
   }

   movies = nowPlayingMovies

   public favoriteMoviesIds: string[] = []
   public watchLaterMovieIds: string[] = []


   handleAddToFavorite(item: any) {
      if (!this.favoriteMoviesIds.includes(item))
         this.favoriteMoviesIds.push(item)
   }

   handleAddToWatchList(item: any) {
      if (!this.watchLaterMovieIds.includes(item))
         this.watchLaterMovieIds.push(item)
   }

}
