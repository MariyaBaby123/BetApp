import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {AuthenticationService} from '../login-screen/authentication.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css'],

})
export class DashboardComponent implements OnInit {

  showUserView: boolean;
  userViewLoading: boolean;
  selectedUser;
  match_list;
  constructor(private authService: AuthenticationService, private appService: AppService) { }

  ngOnInit() {
    this.showUserView = false;
    this.authService.checkCredentials();
  }

  getNotification(user) {
    this.showUserView = true;
    this.selectedUser = user.userEmail;
    this.userViewLoading = true;
    this.appService.getUserTrackRecord(user).subscribe
    (match_list => {
      this.userViewLoading = false;
      this.match_list = match_list.matches;
    });
  }

  showMatchTemplate(){
    this.showUserView = false;
  }

}
