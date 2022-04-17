import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPast'
})
export class DaysPastPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
