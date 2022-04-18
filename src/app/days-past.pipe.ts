import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPast'
})
export class DaysPastPipe implements PipeTransform {

  transform(value:any):any {
    // let valueArr = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig,"$1 $2 $3").split(" ");
	  //   let dateCreated = new Date(valueArr[0],valueArr[1]-1, valueArr[2]);
	  //   let now = new Date() ;
	  //   let diff = now.getTime() - dateCreated.getTime();
	  //   diff/=(1000 * 60 * 60 * 24);
	  //   return Math.floor(diff);
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) return 'Just now';
      const intervals: any = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          if (counter === 1) {
            return counter + ' ' + i + ' ago';
          } else {
            return counter + ' ' + i + 's ago';
          }
      }
    }
    return value;
  }
  

}
