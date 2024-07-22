import { Routes } from '@angular/router';
import { TopRateMoviesPageComponent } from './pages/top-rate-movies-page/top-rate-movies-page.component';
import { UpcomingMoviesPageComponent } from './pages/upcoming-movies-page/upcoming-movies-page.component';
import { NowPlaingMoviesPageComponent } from './pages/now-plaing-movies-page/now-plaing-movies-page.component';
import { PopularMoviesPageComponent } from './pages/popular-movies-page/popular-movies-page.component';
import { FavoriteMoviesComponent } from './pages/favorite-movies/favorite-movies.component';
import { WatchListMoviesComponent } from './pages/watch-list-movies/watch-list-movies.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

export const routes: Routes = [
   { path: '', component: PopularMoviesPageComponent },
   { path: 'popular', component: PopularMoviesPageComponent },
   { path: 'now-plaing', component: NowPlaingMoviesPageComponent },
   { path: 'top-rate', component: TopRateMoviesPageComponent },
   { path: 'upcoming', component: UpcomingMoviesPageComponent },
   { path: 'movie/:id', component: DetailsPageComponent },
   { path: 'favorite', component: FavoriteMoviesComponent },
   { path: 'watch-list', component: WatchListMoviesComponent }
];
