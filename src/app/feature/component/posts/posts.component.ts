import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendapiService } from '../../services/backendapi.service'
import { post } from '../../../shared/post'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy  {

  private httpSubscription: Subscription;
  posts: post[] = [];
  usersnames: string[] = [];
  id: number = 0;
   
  constructor( private servece: BackendapiService ) { }

  ngOnInit() {
       //this.posts = this.servece.posts;
      this.httpSubscription = this.servece.getPosts().subscribe( response => {
          this.posts = this.servece.posts
          this.usersnames = this.servece.users.map( cell => cell.name)
        });
  }

  ngOnDestroy() {
    this.httpSubscription.unsubscribe();
  }

}
