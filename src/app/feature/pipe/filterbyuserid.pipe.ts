import { Pipe, PipeTransform } from '@angular/core';
import { post } from '../../shared/post.module';

@Pipe({
  name: 'filterbyuserid'
})
export class FilterbyuseridPipe implements PipeTransform {

  transform(posts: post[], id: any): any {
    if ( id == "" || posts.length == 0 ) return posts;
       return posts.filter( cell => cell.userId == id );
    }
}
