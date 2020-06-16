import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kcalPipe'
})
export class KcalPipe implements PipeTransform {

  transform(value: number): unknown {
    return value + ' Kcal';
  }

}
