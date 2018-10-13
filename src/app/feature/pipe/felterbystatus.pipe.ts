import { Pipe, PipeTransform } from '@angular/core';
import { task } from '../../shared/task.module';

@Pipe({
  name: 'felterbystatus'
})
export class FelterbystatusPipe implements PipeTransform {

  transform(tasks: task[], status: string): any {
    if ( status == "all" ) return tasks;
    if ( status === "false" ) {
      return tasks.filter( cell => cell.completed === false);
    } else if ( status === "true" ) {
      return tasks.filter( cell => cell.completed === true);
    }
    
  }

}
