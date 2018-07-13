import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {AppService} from '../app.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css', '../app.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private appService: AppService) { }
  winner: string;
  votesubmitLoading;
  successMessage;
  matchId;

  ngOnInit() {
  }

  voteForFinalChampion(championVoteform): void {
    this.votesubmitLoading = true;
    const predictionObj = {
      'userEmail' : {},
      'prediction' : ''
    };
    const user = this.localStorageService.get('useremail');
    predictionObj.userEmail = user;
    predictionObj.prediction = this.winner;
    this.matchId = 102;
    if (confirm('To see bounty distribution amongst above optons , please click on  the rules link in the homepage.')) {
      this.appService.voteForFinalChampion(predictionObj, this.matchId).subscribe
      (vote => {
        this.votesubmitLoading = false;
        if (vote.statusCode === 'SUCCESS') {
          alert('Votes registered successfully');
          championVoteform.reset();
          this.successMessage = true;
        } else {
          alert('Votes not registered. Please try again');
        }
      });
    } else {
      this.votesubmitLoading = false;
    }
    this.successMessage = false;
  }

}
