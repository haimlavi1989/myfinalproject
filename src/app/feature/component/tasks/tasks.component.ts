import { Component, OnInit } from '@angular/core';
import { BackendapiService } from '../services/backendapi.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any[] = [];
  status: string = "all";

  constructor( private servece: BackendapiService ) { }

  ngOnInit() {
    this.servece.getTasks().subscribe( response => 
        this.tasks = this.servece.tasks
      );
  }

}
