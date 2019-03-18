import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageValidator'
})
export class ImageValidatorPipe implements PipeTransform {

  transform(value: any, property: string, position: number): string {

    if (value[property].length > 0) {
      return value[property][position].url;
    } else {
      return 'assets/images/noimage.png';
    }
  }

}
