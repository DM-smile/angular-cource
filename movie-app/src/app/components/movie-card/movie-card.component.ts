import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateFormatPipe } from "../../pipes/date-format/date-format.pipe";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
   selector: 'app-movie-card',
   standalone: true,
   templateUrl: './movie-card.component.html',
   styleUrl: '../../app.component.scss',
   imports: [CommonModule, DateFormatPipe, CardModule, ButtonModule]
})
export class MovieCardComponent implements OnInit {
   @Input() data: any
   @Output() addFavorite = new EventEmitter<any>()
   @Output() addWatchList = new EventEmitter<any>()
   movie: any


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
