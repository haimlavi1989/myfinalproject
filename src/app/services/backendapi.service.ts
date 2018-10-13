import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  public users: any[] = [];
  public posts: any[] = [];
  public tasks: any[] = [];

  usersurl: string = "https://jsonplaceholder.typicode.com/users";
  postsurl: string = "https://jsonplaceholder.typicode.com/posts";
  tasksurl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<any[]>(this.usersurl);
  }

  setUsers(users: any) {
    this.users = users;
  }


  getPosts() {
    return this.http.get<any[]>(this.postsurl);
  }

  setPosts(posts: any) {
    this.posts = posts;
  }

  getTasks() {
    return this.http.get<any[]>(this.tasksurl);
  }

  setTasks(tasks: any) {
    this.tasks = tasks;
  }
}
