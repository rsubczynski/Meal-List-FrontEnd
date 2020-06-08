import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gramPipe'
})
export class GramPipePipe implements PipeTransform {

  transform(value: number): unknown {
    return value + ' g';
  }

}
