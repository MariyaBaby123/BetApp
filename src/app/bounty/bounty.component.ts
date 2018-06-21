import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-bounty',
  templateUrl: './bounty.component.html',
  styleUrls: ['./bounty.component.css']
})
export class BountyComponent implements OnInit {

  won = 0;
  lost = 0;
  points = 0;
  user_list;
  show;
  constructor(private appService: AppService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.appService.getUserReportCard(this.localStorageService.get('useremail')).subscribe
    (user_list => {
      this.user_list = user_list.users;
      if (this.user_list && this.user_list[0]) {
        const user = this.user_list[0];
        this.won = user.matchesWon;
        this.lost = user.matchesLost;
        this.points = user.userPoints;
        this.show = true;
      }

    });

  }

}
