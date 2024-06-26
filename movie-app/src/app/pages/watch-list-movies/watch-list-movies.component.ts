import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-watch-list-movies',
   standalone: true,
   imports: [HeaderComponent, MovieCardComponent, CommonModule, MovieListComponent],
   templateUrl: './watch-list-movies.component.html',
   styleUrl: './watch-list-movies.component.scss'
})
export class WatchListMoviesComponent implements OnInit {

   constructor(private route: ActivatedRoute) { }


   public favoriteMovies: any = []
   public watchListMovies: any = []
   data: any;

   ngOnInit() {
      this.route.queryParams.subscribe((params: { [x: string]: any; }) => {
         const dataString = params['data'];
         this.favoriteMovies = dataString ? JSON.parse(dataString) : [];
      });

      this.route.queryParams.subscribe((params: { [x: string]: any; }) => {
         const dataString = params['data'];
         this.watchListMovies = dataString ? JSON.parse(dataString) : [];
      });
   }

}
