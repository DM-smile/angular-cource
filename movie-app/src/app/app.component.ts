import { Component } from '@angular/core';
import { MovieListComponent } from "./components/movie-list/movie-list.component";

@Component({
   selector: 'app-root',
   standalone: true,
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
   imports: [MovieListComponent]
})
export class AppComponent { }
