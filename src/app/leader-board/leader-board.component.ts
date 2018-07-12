import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import {AppService} from '../app.service';
import {PagerService} from '../pager.service';


@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  @Output() notifyDashboard: EventEmitter<any> = new EventEmitter();
  leaderBoardList: any;
  pager: any;
  pagedLeaderBoard: any;
  selectedIndex: any;
  constructor(private pagerService: PagerService, private appService: AppService) { }

  ngOnInit() {

    this.appService.getLeaderBoard().subscribe
    (user_list => {
      this.leaderBoardList = user_list.users;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    if (this.leaderBoardList) {
      this.pager = this.pagerService.getPager(this.leaderBoardList.length, page);
      // get current page of items
      this.pagedLeaderBoard = this.leaderBoardList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    } else {
      this.pagedLeaderBoard = [];
    }
  }

  loadUserView(user, i) {
    this.selectedIndex = null;
    this.selectedIndex = i;
    this.notifyDashboard.emit(user);
  }

}
