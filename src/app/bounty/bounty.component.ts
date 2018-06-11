import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

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
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUserReportCard().subscribe
    (user_list => {
      this.user_list = user_list.users;
      console.log(this.user_list);
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
