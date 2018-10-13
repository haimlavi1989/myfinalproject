import { Component, OnInit } from '@angular/core';
import { BackendapiService } from '../../services/backendapi.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  usersnames: any[] = [];
  id: number = 0;
   
  constructor( private servece: BackendapiService ) { }

  ngOnInit() {
       //this.posts = this.servece.posts;
        this.servece.getPosts().subscribe( response => {
          this.posts = this.servece.posts
          this.usersnames = this.servece.users.map( cell => cell.name)
        });
  }

}
