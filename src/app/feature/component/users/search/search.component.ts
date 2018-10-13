import { Component, OnInit } from '@angular/core';
import { BackendapiService } from './../../../../services/backendapi.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 
  filterUsers: any[] = [];
  searching: boolean = false;

  constructor( private service: BackendapiService ) { }

  Search(keword: string, searching: boolean) {
    if ( keword != "" ) {
      this.searching = searching;
      this.filterUsers = this.service.users.filter( cell => cell.name.includes(keword) );
    }
  }

}
