import { Component, OnInit } from '@angular/core';
import { BackendapiService } from '../../../services/backendapi.service'
import { user } from '../../../../shared/user'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 
  filterUsers: user[] = [];
  searching: boolean = false;

  constructor( private service: BackendapiService ) { }

  Search(keword: string, searching: boolean) {
    if ( keword != "" ) {
      this.searching = searching;
      this.filterUsers = this.service.users.filter( cell => cell.name.includes(keword) );
    }
  }

}
