import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendapiService } from '../../../services/backendapi.service'
import { user } from "../../../../shared/user.module"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit, OnDestroy {
  
  private httpSubscription: Subscription;
  users: user[] = [];

  constructor( private servece: BackendapiService ) {}

  ngOnInit() {
    //this.users = this.servece.users;
    this.httpSubscription = this.servece.getUsers().subscribe( response => 
      this.users = this.servece.users
    );

  }

  ngOnDestroy() {
    this.httpSubscription.unsubscribe();
  }

}
