import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css', '../app.component.css']
})
export class PredictionComponent implements OnInit {

  selectedMatch;
  predictions;
  selectedMatchName;
  predictionViewLoading;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.selectedMatch = this.appService.getSelectedMatchForUserView();
    this.selectedMatchName = this.appService.getSelectedMatchNameForUserView();
    this.getPredictionsForMatch(this.selectedMatch);
  }

  getPredictionsForMatch(matchId) {
    this.predictionViewLoading = true;
    this.appService.getAllPredictionsForMatch(matchId).subscribe
    (user_list => {
      this.predictionViewLoading = false;
      this.predictions = user_list.users;
    });
  }

}
