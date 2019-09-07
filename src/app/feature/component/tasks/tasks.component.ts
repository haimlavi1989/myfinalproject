import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendapiService } from '../../services/backendapi.service'
import { task } from '../../../shared/task'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  private httpSubscription: Subscription;
  tasks: task[] = [];
  status: string = "all";

  constructor( private servece: BackendapiService ) { }

  ngOnInit() {
    this.httpSubscription = this.servece.getTasks().subscribe( response => 
        this.tasks = this.servece.tasks
      );
  }

  ngOnDestroy() {
    this.httpSubscription.unsubscribe();
  }
}
