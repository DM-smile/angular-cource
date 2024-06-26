import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
   selector: 'app-header',
   standalone: true,
   imports: [RouterLink],
   templateUrl: './header.component.html',
   styleUrl: './header.component.scss'
})
export class HeaderComponent {
   @Input() favoriteMoviesIds: string[] = [];
   @Input() watchLaterMovieIds: string[] = [];

   constructor(private router: Router) { }

   navigateWithData(data: string[], favorite?: string) {
      const dataString = JSON.stringify(data);
      const path = favorite ? 'favorite' : 'watch-list';

      this.router.navigate(['favorite'], { queryParams: { data: dataString } })

      this.router.navigate([{ outlets: { header: [path] } }], { queryParams: { data: dataString } });
   }

}
