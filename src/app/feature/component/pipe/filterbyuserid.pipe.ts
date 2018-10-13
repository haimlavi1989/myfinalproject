import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyuserid'
})
export class FilterbyuseridPipe implements PipeTransform {

  transform(posts: any, id: any): any {
    if ( id == "" || posts.length == 0 ) return posts;
       return posts.filter( cell => cell.userId == id );
    }
}
