import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendapiService } from '../../services/backendapi.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  userData: any = {'name': '', 'email': '', 'address': {'city': ''}};
  update: boolean = false;
  delete: boolean = false;
  postsData: any[] =  [{'userId': '', 'title': ''}];
  tasksData: any[] = [{'userId': '', 'title': ''}];

  constructor( private ActivatedR: ActivatedRoute, private service: BackendapiService, private router: Router) {
  }

  ngOnInit() {
    this.ActivatedR.queryParamMap.subscribe( data => {

      this.id = +this.ActivatedR.snapshot.params.id-1;

      this.userData.name = this.service.users[this.id].name;
      this.userData.email = this.service.users[this.id].email;
      this.userData.address.city = this.service.users[this.id].address.city;

      this.postsData = this.service.posts.filter( cell => cell.userId == this.id+1 );
      this.tasksData = this.service.tasks.filter( cell => cell.userId == this.id+1 );

    });
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
