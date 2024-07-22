import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateFormatPipe } from "../../pipes/date-format/date-format.pipe";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router'
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-movie-card',
   standalone: true,
   templateUrl: './movie-card.component.html',
   styleUrl: './movie-card.component.scss',
   imports: [CommonModule, DateFormatPipe, CardModule, ButtonModule, RouterLink]
})
export class MovieCardComponent implements OnInit {

   setToFavoritesMovie() {
      throw new Error('Method not implemented.');
   }
   redirectToDetailsPage(arg0: string) {
      throw new Error('Method not implemented.');
   }

   constructor(private movieService: MovieService, private router: Router) { }
   isFavoritePage: boolean = false
   isWatchListPage: boolean = false

   movie: any

   @Input() data: any


   ngOnInit() {
      this.movie = this.data
      this.isFavoritePage = this.router.url.includes('favorite')
      this.isWatchListPage = this.router.url.includes('watch-list')
   }
   addToFavorites(mov: any) {
      this.movieService.setToFavoritesMovie(mov)
   }
   addToWatchList(mov: any) {
      this.movieService.setToWatchList(mov)
   }
   removeFavorite(mov: any) {
      this.movieService.removeFromFavoriteList(mov)
   }
   removeWatchList(mov: any) {
      this.movieService.removeFroWatchList(mov)
   }
}
