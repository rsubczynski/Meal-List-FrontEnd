

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dishTypePipe'
})
export class DishPipePipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'BREAKFAST': {
        return 'Śniadanie';
      }
      case 'LUNCH': {
        return 'Drugie śniadanie';
      }
      case 'DINNER': {
        return 'Obiad';
      }
      case 'SUPPER': {
        return 'Kolacja';
      }
   }
   return '';
  }
}
