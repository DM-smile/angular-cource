import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterModule, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
   selector: 'app-sidebar',
   standalone: true,
   imports: [SidebarModule, ButtonModule, RouterLink, RouterModule, RouterOutlet, RouterLinkActive],
   templateUrl: './sidebar.component.html',
   styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
   sidebarVisible: any;

}
