import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendapiService } from './feature/component/services/backendapi.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './feature/component/users/users.component';
import { PostsComponent } from './feature/component/posts/posts.component';
import { TasksComponent } from './feature/component/tasks/tasks.component';
import { AllComponent } from './feature/component/users/all/all.component';
import { AddComponent } from './feature/component/users/add/add.component';
import { SearchComponent } from './feature/component/users/search/search.component';
import { DetailsComponent } from './feature/component/users/details/details.component';
import { FilterbyuseridPipe } from './feature/component/pipe/filterbyuserid.pipe';
import { FelterbystatusPipe } from './feature/component/pipe/felterbystatus.pipe';

const appRoutes : Routes = [
  { path : 'users' , component : UsersComponent,
    children : [
      { path : 'all', component : AllComponent},
      { path : 'add', component : AddComponent},
      { path : 'search', component : SearchComponent},
      { path : ':id', component : DetailsComponent},
      { path: '',   redirectTo: '/users/all', pathMatch: 'full' },
    ] 
  },
  { path : 'posts' , component : PostsComponent },
  { path : 'tasks' , component : TasksComponent },
  { path: '',   redirectTo: '/users/all', pathMatch: 'full' },
  ];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    TasksComponent,
    AllComponent,
    AddComponent,
    SearchComponent,
    DetailsComponent,
    FilterbyuseridPipe,
    FelterbystatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BackendapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
