import { Component } from '@angular/core';
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-root',
   standalone: true,
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
   imports: [MovieCardComponent, RouterOutlet, RouterModule, RouterLink, SidebarComponent, CommonModule, RouterLinkActive]
})
export class AppComponent {

}
