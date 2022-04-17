import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPast'
})
export class DaysPastPipe implements PipeTransform {

  transform(value:any):number {
    let currentDate = new Date();  // getting current date
      //getting the difference in current time and time the quote was added
    // getting the difference in miliseconds

    let dateDifference = currentDate.getTime() - value.getTime();

    //converting miliseconds into days

    dateDifference=dateDifference /(24*60*60*1000);


    //Rounding up a number to the next largest integer

    return Math.ceil(dateDifference)-1;
    
  }

}
