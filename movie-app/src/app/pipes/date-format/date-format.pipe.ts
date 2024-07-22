import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'dateFormat',
   standalone: true,

})
export class DateFormatPipe implements PipeTransform {

   transform(value: string): any {
      if ((/\d{4}\-\d{2}\-\d{2}/).test(value))
         return value.replaceAll('-', '.')

   }
}