import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateFormatPipe } from "../../pipes/date-format/date-format.pipe";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
   selector: 'app-movie-card',
   standalone: true,
   templateUrl: './movie-card.component.html',
   styleUrl: './movie-card.component.scss',
   imports: [CommonModule, DateFormatPipe, CardModule, ButtonModule, RouterLink]
})
export class MovieCardComponent implements OnInit {
   redirectToDetailsPage(arg0: string) {
      throw new Error('Method not implemented.');
   }

   movie: any

   @Input() data: any
   @Output() addFavorite = new EventEmitter<any>()
   @Output() addWatchList = new EventEmitter<any>()

   ngOnInit() {
      this.movie = this.data
   }
   addToFavorites() {
      this.addFavorite.emit(this.movie)
   }
   addToWatchList() {
      this.addWatchList.emit(this.movie)
   }
}
