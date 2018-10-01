import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // transform(value: any) {
  //   return value.substr(0, 10);
  // }

  transform(value: any, limit: any) {
    return value.substr(0, limit)
  }

}
