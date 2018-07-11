import { Component, OnInit, Input } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {AppService} from '../app.service';

@Component({
  selector: 'app-semi-final',
  templateUrl: './semi-final.component.html',
  styleUrls: ['./semi-final.component.css', '../app.component.css']
})
export class SemiFinalComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private appService: AppService) { }
  winner: string;
  votesubmitLoading;
  successMessage;
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
    if (confirm('Bounty for betting in this jackpot is 300 instead of usual 50. So please vote if you are willing to bet for 300.')) {
      this.appService.voteForChampion2(predictionObj).subscribe
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
