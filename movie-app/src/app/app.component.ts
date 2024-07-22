import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { MovieService } from './services/movie.service';

@Component({
   selector: 'app-root',
   standalone: true,
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
   imports: [MovieCardComponent, RouterOutlet, RouterModule, RouterLink, SidebarComponent, CommonModule, RouterLinkActive, HeaderComponent]
})

export class AppComponent implements OnInit {
   upcoming: any[] = []
   constructor(private movieService: MovieService) { }
   ngOnInit(): void {
      this.upcoming = this.movieService.getUpcomingMovies()
   }
}
