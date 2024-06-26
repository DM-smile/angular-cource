import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Router } from '@angular/router';
import { upcomingMovies } from '../../../assets/mock/mock-data';

@Component({
   selector: 'app-upcoming-movies-page',
   standalone: true,
   templateUrl: './upcoming-movies-page.component.html',
   styleUrl: './upcoming-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent]
})
export class UpcomingMoviesPageComponent {

   constructor(private router: Router) {

   }

   redirectToDetailsPage(id: string) {
      this.router.navigate([`movie/:${id}`])
   }

   movies = upcomingMovies

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
