import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../../shared/post.module';
import { task } from '../../shared/task.module';
import { user } from '../../shared/user.module';

const usersurl: string = "https://jsonplaceholder.typicode.com/users";
const postsurl: string = "https://jsonplaceholder.typicode.com/posts";
const tasksurl: string = "https://jsonplaceholder.typicode.com/todos";

@Injectable({
  providedIn: 'root'
})

export class BackendapiService {

  public users: user[] = [];
  public posts: post[] = [];
  public tasks: task[] = [];

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<user[]>(usersurl);
  }

  setUsers(users: user[]) {
    this.users = users;
  }


  getPosts() {
    return this.http.get<post[]>(postsurl);
  }

  setPosts(posts: post[]) {
    this.posts = posts;
  }

  getTasks() {
    return this.http.get<task[]>(tasksurl);
  }

  setTasks(tasks: task[]) {
    this.tasks = tasks;
  }
}
