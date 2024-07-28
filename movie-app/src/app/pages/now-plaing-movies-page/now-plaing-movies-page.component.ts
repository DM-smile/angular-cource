import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-now-plaing-movies-page',
   standalone: true,
   templateUrl: './now-plaing-movies-page.component.html',
   styleUrl: './now-plaing-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule]
})
export class NowPlaingMoviesPageComponent implements OnInit {

   nowPlaingMovies: any[] = []

   constructor(private movieService: MovieService) { }

   ngOnInit(): void {
      this.movieService.getNowPlayingMovies().subscribe(data => {
         this.nowPlaingMovies = data.results
      })
   }

}
