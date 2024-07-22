import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-upcoming-movies-page',
   standalone: true,
   templateUrl: './upcoming-movies-page.component.html',
   styleUrl: './upcoming-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent]
})
export class UpcomingMoviesPageComponent implements OnInit {
   upcomingMovies: any[] = []


   constructor(private movieService: MovieService) { }

   ngOnInit(): void {
      this.upcomingMovies = this.movieService.getUpcomingMovies()
   }

}
