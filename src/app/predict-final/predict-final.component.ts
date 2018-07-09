import { Component, OnInit, Input} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {AppService} from '../app.service';

@Component({
  selector: 'app-predict-final',
  templateUrl: './predict-final.component.html',
  styleUrls: ['./predict-final.component.css', '../app.component.css']
})
export class PredictFinalComponent implements OnInit {

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
    if (confirm('Bounty for betting in this jackpot is 200 instead of usual 50. So please vote if you are willing to bet for 200.')) {
      this.appService.voteForChampion(predictionObj).subscribe
      (vote => {
        this.votesubmitLoading = false;
        if (vote.statusCode === 'SUCCESS') {
          alert('Votes registered successfully');
          championVoteform.reset();
          this.successMessage = true;
          // this.getupcomingMatch(this.localStorageService.get('useremail'));
        } else {
          alert('Votes not registered. Please try again');
        }
      });
    } else {
      this.votesubmitLoading = false;
    }
    // prediction.push({'userEmail' : user, 'prediction' :  this.winner});
    this.successMessage = false;
  }

}
