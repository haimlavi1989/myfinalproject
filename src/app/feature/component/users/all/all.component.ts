import { Component, OnInit } from '@angular/core';
import { BackendapiService } from '../../../services/backendapi.service'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
   
  users: any[] = [];

  constructor( private servece: BackendapiService ) {}

  ngOnInit() {
    //this.users = this.servece.users;
    this.servece.getUsers().subscribe( response => 
      this.users = this.servece.users
    );

  }

}
