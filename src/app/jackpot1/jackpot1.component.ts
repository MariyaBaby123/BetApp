import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-jackpot1',
  templateUrl: './jackpot1.component.html',
  styleUrls: ['./jackpot1.component.css', '../prediction/prediction.component.css' , '../app.component.css' ]
})
export class Jackpot1Component implements OnInit {

  matchstatsloading;
  selectedMatchOdds;
  totalbets;
  predictions;
  matchId;
  constructor( private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.matchId = this.route.snapshot.queryParams['matchId'];
    if (!this.matchId) {
        this.matchId = 100;
    }
    this.matchstatsloading = true;
    this.appService.getOddsForJackpot1(this.matchId).subscribe
    (  odds => {
        this.matchstatsloading = false;
        this.selectedMatchOdds = odds.predictions;
        if (odds.predictions && odds.predictions[0]) {
          this.totalbets = odds.predictions[0].totalJackPotBets;
        }

      },
      error => {
        this.matchstatsloading = false;
      });
    this.getPredictionsForJackpot1();
  }

  getPredictionsForJackpot1() {
    this.matchstatsloading = true;
    this.appService.getMatchStatisticsJackPot1(this.matchId).subscribe
    (user_list => {
        this.matchstatsloading = false;
        this.predictions = user_list.users;
      },
      error => {
        this.matchstatsloading = false;
      });
  }

}
