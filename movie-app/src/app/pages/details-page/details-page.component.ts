import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../mock/mock-data';

@Component({
   selector: 'app-details-page',
   standalone: true,
   templateUrl: './details-page.component.html',
   styleUrl: './details-page.component.scss',
   imports: [MovieCardComponent, HeaderComponent]
})
export class DetailsPageComponent implements OnInit {
   favoriteMoviesIds: any;
   watchLaterMovieIds: any;
   constructor(private route: ActivatedRoute) { }

   movie: any;
   handleAddToWatchList(_t2: any) {
      throw new Error('Method not implemented.');
   }
   handleAddToFavorite(_t2: any) {
      throw new Error('Method not implemented.');
   }

   movies = [
      ...nowPlayingMovies,
      ...popularMovies,
      ...topRatedMovies,
      ...upcomingMovies
   ]

   ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      if (id)
         this.movie = this.movies.find((movieItem) => movieItem.id === parseInt(id))
   }


}



