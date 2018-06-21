import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   username;
  constructor(private  localStorageService: LocalStorageService) { }

  ngOnInit() {
   this.username = this.localStorageService.get('useremail');
  }

}
