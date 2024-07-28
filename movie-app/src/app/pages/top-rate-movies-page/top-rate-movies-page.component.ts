import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-top-rate-movies-page',
   standalone: true,
   templateUrl: './top-rate-movies-page.component.html',
   styleUrl: './top-rate-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule]
})
export class TopRateMoviesPageComponent implements OnInit {


   topRatedMovies: any[] = []


   constructor(private movieService: MovieService) { }

   ngOnInit(): void {
      this.movieService.getTopRatedMovies().subscribe(data => {
         this.topRatedMovies = data.results
      })
   }

}
