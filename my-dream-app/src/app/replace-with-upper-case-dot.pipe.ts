import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWithUpperCaseDot'
})
export class ReplaceWithUpperCaseDotPipe implements PipeTransform {

  transform(value: String, ...args: String[]): String {
    return value.toUpperCase()+".";
  }

}
