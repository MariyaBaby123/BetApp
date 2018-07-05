import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {AuthenticationService} from '../login-screen/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   username;
  constructor(private router: Router, private  localStorageService: LocalStorageService, private authService: AuthenticationService) { }

  ngOnInit() {
   this.username = this.localStorageService.get('useremail');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
