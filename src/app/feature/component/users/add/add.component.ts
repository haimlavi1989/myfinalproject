import { Component } from '@angular/core';
import { BackendapiService } from '../../../services/backendapi.service'
import { Router } from '@angular/router';
import { user } from '../../../../shared/user.module';
import { address } from '../../../../shared/address.module';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  id: number = 0;
  address: address;
  userData: user;
  save: boolean = false;

  constructor( private service: BackendapiService, private router: Router ) {
    this.address = new address("");
    this.userData = new user(0, "", "", this.address);
  }

  mainpage() {
    this.router.navigate(['/users/all']);
  }

  customSubmit(isvalid: boolean) {

    if(isvalid) {
      if ( this.save == true ) {
        this.userData.id = this.service.users.length + 1;
        this.service.users.push(this.userData);
        this.save = false;
        this.mainpage();
  
      }
    }
  }
}
