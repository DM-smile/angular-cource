import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieService } from '../../services/movie.service';

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
   constructor(private route: ActivatedRoute, private moviServise: MovieService) { }

   movie: any;

   ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      if (id) {
         this.moviServise.getDetailsPage(id).subscribe(data => {
            this.movie = data
         })
      }

   }
}



