import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';


@Component({
  selector: 'app-match-stats',
  templateUrl: './match-stats.component.html',
  styleUrls: ['./match-stats.component.css', '../app.component.css']
})
export class MatchStatsComponent implements OnInit {

  matchList;
  matchstatsloading;
  constructor( private appService: AppService) { }

  ngOnInit() {
    this.matchstatsloading = true;
    this.appService.getPastMatchStatistics().subscribe
    (match_list => {
      this.matchstatsloading = false;
      this.matchList = match_list.matches;
      for ( const m of this.matchList) {
        if (m && new Date(m.matchTime)) {
          const m_date = new Date(m.matchTime + ' GMT+0530');
          m.matchTime = m_date.toLocaleString();
        }
      }
    });
  }
}
