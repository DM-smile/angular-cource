import { Injectable } from '@angular/core';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../mock/mock-data';

@Injectable({
   providedIn: 'root'
})


export class MovieService {
   allMovies = [...new Set([...nowPlayingMovies, ...popularMovies, ...topRatedMovies, ...upcomingMovies])]
   favMovies: any[] = []
   watchList: any[] = []
   constructor() { }

   getNowPlayingMovies() {
      return nowPlayingMovies
   }
   getPopularMovies() {
      return popularMovies
   }
   getTopRatedMovies() {
      return topRatedMovies
   }
   getUpcomingMovies() {
      return upcomingMovies
   }

   setToFavoritesMovie(movie: any) {
      if (!this.favMovies.includes(movie))
         this.favMovies.push(movie)
   }

   removeFromFavoriteList(movie: any) {
      const index = this.favMovies.findIndex(item => item.id === movie.id);
      if (index !== -1) {
         this.favMovies.splice(index, 1);
      }
   }
   getToFavoritesMovie() {
      return this.favMovies
   }
   setToWatchList(movie: any) {
      if (!this.watchList.includes(movie))
         this.watchList.push(movie)
   }
   removeFroWatchList(movie: any) {
      const index = this.watchList.findIndex(item => item.id === movie.id);
      if (index !== -1) {
         this.watchList.splice(index, 1);
      }
   }
   getToWatchList() {
      return this.watchList
   }

   getMovieById(id: number) {
      this.allMovies.filter(movie => movie.id === id)
   }



}