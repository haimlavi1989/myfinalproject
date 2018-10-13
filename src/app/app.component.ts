import { Component, OnInit } from '@angular/core';
import { BackendapiService } from './feature/services/backendapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: any[] = [];
  posts: any[] = [];
  tasks: any[] = [];

  constructor( private servece: BackendapiService ) { }

  ngOnInit() {
    this.servece.getUsers().subscribe( response => {
      this.users = response;
      this.servece.setUsers(this.users);
    });

    this.servece.getPosts().subscribe( response => {
      this.posts = response;
      this.servece.setPosts(this.posts);
    });

    this.servece.getTasks().subscribe( response => {
      this.tasks = response;
      this.servece.setTasks(this.tasks);
    });
  }
}
