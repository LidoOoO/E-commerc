import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, numberofchar:number): string {
    return value.split(" ").splice(0, numberofchar).join(" ") ;
  }

}
