import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {PagerService} from '../pager.service';
import {AuthenticationService} from '../login-screen/authentication.service';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css', '../app.component.css']
})
export class MatchListComponent implements OnInit {

  match_list;
  pager;
  paged_match_list;
  upcomingmatchLoading;
  votesubmitLoading;
  constructor(private localStorageService: LocalStorageService, private appService: AppService, private pagerService: PagerService) { }

  ngOnInit() {
    this.upcomingmatchLoading = true;
    this.votesubmitLoading = false;
    this.getupcomingMatch(this.localStorageService.get('useremail'));
  }

  getupcomingMatch(userEmail) {
    this.upcomingmatchLoading = true;
    this.appService.getUpcomingMatches(this.localStorageService.get('useremail')).subscribe
    (match_list => {
      this.upcomingmatchLoading = false;
      /*set open for voting if match time is past hour from now.*/
      if ( match_list.matches) {
        const now = +new Date();
        for ( const m of match_list.matches) {
          const mDate = +new Date(m.matchTime);
          if ( ((mDate - now) / 36e5) <= 1) {
            m.openForVote = false;
          }
        }
      }
      this.match_list = match_list.matches;
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.match_list.length, page,5);

    // get current page of items
    this.paged_match_list = this.match_list.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  vote(voteform): void {
    const prediction = [];
    const user = this.localStorageService.get('useremail');
    for (const property in  voteform.form.controls) {
      if ( voteform.form.controls.hasOwnProperty(property)) {
        if ( voteform.form.controls[property].value !== '') {
          prediction.push({'userEmail' : user, 'matchId' :  property.substr(5), 'prediction':  voteform.form.controls[property].value});
        }

      }
    }
    this.votesubmitLoading = true;
    this.appService.vote(prediction).subscribe
    (user_list => {
      this.votesubmitLoading = false;
      if (user_list.statusCode === 'SUCCESS') {
        alert('Votes registered successfully');
        voteform.reset();
        this.getupcomingMatch(this.localStorageService.get('useremail'));
      } else {
        alert('Votes not registered. Please try again');
      }
    });
  }

  setselectedMatch(match: any) {
    this.appService.setSelectedMatchForUserView(match.matchId);
    this.appService.setSelectedMatchNameForUserView(match.team1Name + ' vs ' + match.team2Name);
  }


}
