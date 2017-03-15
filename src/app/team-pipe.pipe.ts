import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'team'
})
export class TeamPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!!value) {
      if (!!args) {
        return value[args];
      }
      return value;
    }
    return null;
  }

}
