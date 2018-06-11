import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {PagerService} from '../pager.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  match_list;
  pager;
  paged_match_list;
  constructor(private appService: AppService, private pagerService: PagerService) { }

  ngOnInit() {
    this.appService.getUpcomingMatches().subscribe
     (match_list => {
       this.match_list = match_list.matches;
       this.setPage(1);
     });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.match_list.length, page,5);

    // get current page of items
    this.paged_match_list = this.match_list.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }


}
