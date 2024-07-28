import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
   selector: 'app-upcoming-movies-page',
   standalone: true,
   templateUrl: './upcoming-movies-page.component.html',
   styleUrl: './upcoming-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule]
})
export class UpcomingMoviesPageComponent implements OnInit {

   upcomingMovies: any[] = []

   constructor(private movieService: MovieService) { }

   ngOnInit(): void {
      this.movieService.getUpcomingMovies().subscribe(data => {
         this.upcomingMovies = data.results
      })
   }

}
