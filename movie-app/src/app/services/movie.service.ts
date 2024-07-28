import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiModel, MovieDetailsApiModel } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})


export class MovieService {
   favMovies: any[] = []
   watchList: any[] = []

   baseApiUrl = 'https://api.themoviedb.org/3/movie'

   apiTocken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmZmNTI0ZjRiMWI2MWUyNDQxOTRkNzU3MTZkMDA2ZiIsIm5iZiI6MTcyMTkyNjc3NC43MTg5MSwic3ViIjoiNjZhMjdhZTg2YzliNTExZjg1MWI5MzZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.jTbqABQ2wxUpAp7nzM6x9XaRrRog6qt6iD4ulc823ZQ'

   apiKey = '?api_key=c6ff524f4b1b61e244194d75716d006f'

   constructor(private httpClient: HttpClient) { }

   getNowPlayingMovies(): Observable<MovieApiModel> {
      return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}/now_playing${this.apiKey}`)
   }
   getPopularMovies(): Observable<MovieApiModel> {
      return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}/popular${this.apiKey}`)
   }
   getTopRatedMovies(): Observable<MovieApiModel> {
      return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}/top_rated${this.apiKey}`)
   }
   getUpcomingMovies(): Observable<MovieApiModel> {
      return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}/upcoming${this.apiKey}`)
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
      const index = this.watchList.findIndex(item => item.id === movie.id)
      if (index !== -1) {
         this.watchList.splice(index, 1)
      }
   }
   getToWatchList() {
      return this.watchList
   }
   getDetailsPage(id: string): Observable<MovieDetailsApiModel> {
      return this.httpClient.get<MovieDetailsApiModel>(`${this.baseApiUrl}/${id}${this.apiKey}`)

   }
}