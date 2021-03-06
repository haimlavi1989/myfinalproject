import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BackendapiService } from '../../../services/backendapi.service'
import { Subscription } from 'rxjs';
import { address } from '../../../../shared/address';
import { user } from '../../../../shared/user';
import { post } from '../../../../shared/post';
import { task } from '../../../../shared/task';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private paramsSubscription: Subscription;
  id: number = -1;
  userData: user;
  address: address;
  update: boolean = false;
  delete: boolean = false;
  userslength: number;
  postsData: post[]; 
  tasksData: task[];

  constructor( private ActivatedR: ActivatedRoute, private service: BackendapiService, private router: Router) {
    this.address = new address("");
    this.userData = new user(0, "", "", this.address);
    this.postsData = null;
    this.tasksData = null;
  }

  ngOnInit() {

    this.id = +this.ActivatedR.snapshot.params.id-1;
    if (this.userData.name != "") {
      this.init();
    } else {
      this.service.getUsers().subscribe( response => {
        this.init();
      });
    }
    
    this.paramsSubscription = this.ActivatedR.params.subscribe( (params: Params) => {
              this.id = +params['id']-1;
              this.init();
    });

  }

  init() {
      this.userslength = this.service.users.length;
      if ( this.id >= 0 && this.id  <= this.userslength ) { 
        this.userData.name = this.service.users[this.id].name;
        this.userData.email = this.service.users[this.id].email;
        this.userData.address.city = this.service.users[this.id].address.city;
    
        this.postsData = this.service.posts.filter( cell => cell.userId == this.id+1 );
        this.tasksData = this.service.tasks.filter( cell => cell.userId == this.id+1 );
      }
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  mainpage() {
    this.router.navigate(['/users/all']);
  }

  customSubmit(isvalid: boolean) {

    if(isvalid) {
      if ( this.update == true ) {
        this.service.users[this.id].name = this.userData.name;
        this.service.users[this.id].email = this.userData.email;
        this.service.users[this.id].address.city = this.userData.address.city
        this.update = false;
        this.mainpage();
  
      } else if ( this.delete == true) {
  
        if (this.id !== -1) {
          this.service.users = this.service.users.filter(item => item.id !== this.id+1);
        }    
        this.delete = false;
        this.mainpage();
      }

    }
  }

}
