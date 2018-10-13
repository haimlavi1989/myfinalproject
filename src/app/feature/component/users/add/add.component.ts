import { Component, OnInit } from '@angular/core';
import { BackendapiService } from './../../../../services/backendapi.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id: number = 0;
  userData: any = {'id': '', 'name': '', 'email': '', 'address': {'city': ''}};
  save: boolean = false;

  constructor( private service: BackendapiService, private router: Router ) {
  }

  ngOnInit() {
  }

  mainpage() {
    this.router.navigate(['/users/all']);
  }

  customSubmit(isvalid: boolean) {

    if(isvalid) {
      if ( this.save == true ) {
        this.userData.id = this.service.users.length + 1;
        this.service.users.push(this.userData);
        console.log(this.service.users);
        this.save = false;
        this.mainpage();
  
      }
    }
  }
}
