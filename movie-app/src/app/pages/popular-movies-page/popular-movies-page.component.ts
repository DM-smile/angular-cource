import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';


@Component({
   selector: 'app-popular-movies-page',
   standalone: true,
   templateUrl: './popular-movies-page.component.html',
   styleUrl: './popular-movies-page.component.scss',
   imports: [HeaderComponent, MovieCardComponent, CommonModule]
})
export class PopularMoviesPageComponent implements OnInit {

   popularMovies: any[] = []


   constructor(private movieService: MovieService) { }

   ngOnInit(): void {
      this.movieService.getPopularMovies().subscribe(data => {
         this.popularMovies = data.results
      })
   }

}
