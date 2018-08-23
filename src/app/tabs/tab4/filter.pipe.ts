import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString: string, propName: string): any {
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === searchString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
