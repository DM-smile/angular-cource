import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { topRatedMovies } from '../../../assets/mock/mock-data';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";
import { Router } from '@angular/router';

@Component({
   selector: 'app-popular-movies-page',
   standalone: true,
   templateUrl: './popular-movies-page.component.html',
   styleUrl: './popular-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent]
})
export class PopularMoviesPageComponent {

   constructor(private router: Router) {

   }

   redirectToDetailsPage(id: string) {
      this.router.navigate([`movie/:${id}`])
   }

   movies = topRatedMovies

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
