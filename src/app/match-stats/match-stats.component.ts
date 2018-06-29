import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';


@Component({
  selector: 'app-match-stats',
  templateUrl: './match-stats.component.html',
  styleUrls: ['./match-stats.component.css', '../app.component.css']
})
export class MatchStatsComponent implements OnInit {

  matchList;
  constructor( private appService: AppService) { }

  ngOnInit() {
    let matchData;
    matchData = this.appService.getPastMatchStatistics();
    //this.matchList = matchData.matches;
    this.matchList = [{"matchId":1,"team1Name":"RUSSIA","team2Name":"SAUDI ARABIA","matchTime":"2018-06-14 20:30:00.0","bounty":50,"winner":"RUSSIA","numberOfBetForTeam1":23,"numberOfBetForTeam2":3,"numberOfBetForDraw":10,"totalWins":23,"totalBets":36,"winningBounty":28.0},{"matchId":2,"team1Name":"EGYPT","team2Name":"URUGUAY","matchTime":"2018-06-15 17:30:00.0","bounty":50,"winner":"URUGUAY","numberOfBetForTeam1":4,"numberOfBetForTeam2":24,"numberOfBetForDraw":3,"totalWins":24,"totalBets":31,"winningBounty":15.0},{"matchId":3,"team1Name":"MOROCCO","team2Name":"IRAN","matchTime":"2018-06-15 20:30:00.0","bounty":50,"winner":"IRAN","numberOfBetForTeam1":12,"numberOfBetForTeam2":11,"numberOfBetForDraw":12,"totalWins":11,"totalBets":35,"winningBounty":109.0},{"matchId":4,"team1Name":"PORTUGAL","team2Name":"SPAIN","matchTime":"2018-06-15 23:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":8,"numberOfBetForTeam2":19,"numberOfBetForDraw":9,"totalWins":9,"totalBets":36,"winningBounty":150.0},{"matchId":5,"team1Name":"FRANCE","team2Name":"AUSTRALIA","matchTime":"2018-06-16 15:30:00.0","bounty":50,"winner":"FRANCE","numberOfBetForTeam1":26,"numberOfBetForDraw":4,"totalWins":26,"totalBets":30,"winningBounty":8.0},{"matchId":6,"team1Name":"ARGENTINA","team2Name":"ICELAND","matchTime":"2018-06-16 18:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":31,"numberOfBetForTeam2":1,"numberOfBetForDraw":1,"totalWins":1,"totalBets":33,"winningBounty":1600.0},{"matchId":7,"team1Name":"PERU","team2Name":"DENMARK","matchTime":"2018-06-16 21:30:00.0","bounty":50,"winner":"DENMARK","numberOfBetForTeam1":13,"numberOfBetForTeam2":14,"numberOfBetForDraw":8,"totalWins":14,"totalBets":35,"winningBounty":75.0},{"matchId":8,"team1Name":"CROATIA","team2Name":"NIGERIA","matchTime":"2018-06-17 00:30:00.0","bounty":50,"winner":"CROATIA","numberOfBetForTeam1":21,"numberOfBetForTeam2":5,"numberOfBetForDraw":6,"totalWins":21,"totalBets":32,"winningBounty":26.0},{"matchId":9,"team1Name":"COSTA RICA","team2Name":"SERBIA","matchTime":"2018-06-17 18:30:00.0","bounty":50,"winner":"SERBIA","numberOfBetForTeam1":6,"numberOfBetForTeam2":13,"numberOfBetForDraw":10,"totalWins":13,"totalBets":29,"winningBounty":62.0},{"matchId":10,"team1Name":"GERMANY","team2Name":"MEXICO","matchTime":"2018-06-17 21:30:00.0","bounty":50,"winner":"MEXICO","numberOfBetForTeam1":20,"numberOfBetForTeam2":3,"numberOfBetForDraw":7,"totalWins":3,"totalBets":30,"winningBounty":450.0},{"matchId":11,"team1Name":"BRAZIL","team2Name":"SWITZERLAND","matchTime":"2018-06-18 00:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":23,"numberOfBetForDraw":8,"totalWins":8,"totalBets":31,"winningBounty":144.0},{"matchId":12,"team1Name":"SWEDEN","team2Name":"SOUTH KOREA","matchTime":"2018-06-18 18:30:00.0","bounty":50,"winner":"SWEDEN","numberOfBetForTeam1":15,"numberOfBetForTeam2":5,"numberOfBetForDraw":13,"totalWins":15,"totalBets":33,"winningBounty":60.0},{"matchId":13,"team1Name":"BELGIUM","team2Name":"PANAMA","matchTime":"2018-06-18 21:30:00.0","bounty":50,"winner":"BELGIUM","numberOfBetForTeam1":34,"numberOfBetForTeam2":1,"numberOfBetForDraw":3,"totalWins":34,"totalBets":38,"winningBounty":6.0},{"matchId":14,"team1Name":"TUNISIA","team2Name":"ENGLAND","matchTime":"2018-06-19 00:30:00.0","bounty":50,"winner":"ENGLAND","numberOfBetForTeam2":29,"numberOfBetForDraw":12,"totalWins":29,"totalBets":41,"winningBounty":21.0},{"matchId":15,"team1Name":"COLOMBIA","team2Name":"JAPAN","matchTime":"2018-06-19 17:30:00.0","bounty":50,"winner":"JAPAN","numberOfBetForTeam1":36,"numberOfBetForTeam2":3,"numberOfBetForDraw":7,"totalWins":3,"totalBets":46,"winningBounty":717.0},{"matchId":16,"team1Name":"POLAND","team2Name":"SENEGAL","matchTime":"2018-06-19 20:30:00.0","bounty":50,"winner":"SENEGAL","numberOfBetForTeam1":19,"numberOfBetForTeam2":15,"numberOfBetForDraw":13,"totalWins":15,"totalBets":47,"winningBounty":107.0},{"matchId":17,"team1Name":"RUSSIA","team2Name":"EGYPT","matchTime":"2018-06-19 23:30:00.0","bounty":50,"winner":"RUSSIA","numberOfBetForTeam1":18,"numberOfBetForTeam2":13,"numberOfBetForDraw":14,"totalWins":18,"totalBets":45,"winningBounty":75.0},{"matchId":18,"team1Name":"PORTUGAL","team2Name":"MOROCCO","matchTime":"2018-06-20 17:30:00.0","bounty":50,"winner":"PORTUGAL","numberOfBetForTeam1":30,"numberOfBetForTeam2":6,"numberOfBetForDraw":10,"totalWins":30,"totalBets":46,"winningBounty":27.0},{"matchId":19,"team1Name":"URUGUAY","team2Name":"SAUDI ARABIA","matchTime":"2018-06-20 20:30:00.0","bounty":50,"winner":"URUGUAY","numberOfBetForTeam1":38,"numberOfBetForTeam2":4,"numberOfBetForDraw":6,"totalWins":38,"totalBets":48,"winningBounty":13.0},{"matchId":20,"team1Name":"IRAN","team2Name":"SPAIN","matchTime":"2018-06-20 23:30:00.0","bounty":50,"winner":"SPAIN","numberOfBetForTeam1":1,"numberOfBetForTeam2":38,"numberOfBetForDraw":9,"totalWins":38,"totalBets":48,"winningBounty":13.0},{"matchId":21,"team1Name":"DENMARK","team2Name":"AUSTRALIA","matchTime":"2018-06-21 17:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":17,"numberOfBetForTeam2":12,"numberOfBetForDraw":11,"totalWins":11,"totalBets":40,"winningBounty":132.0},{"matchId":22,"team1Name":"FRANCE","team2Name":"PERU","matchTime":"2018-06-21 20:30:00.0","bounty":50,"winner":"FRANCE","numberOfBetForTeam1":31,"numberOfBetForTeam2":7,"numberOfBetForDraw":7,"totalWins":31,"totalBets":45,"winningBounty":23.0},{"matchId":23,"team1Name":"ARGENTINA","team2Name":"CROATIA","matchTime":"2018-06-21 23:30:00.0","bounty":50,"winner":"CROATIA","numberOfBetForTeam1":26,"numberOfBetForTeam2":11,"numberOfBetForDraw":9,"totalWins":11,"totalBets":46,"winningBounty":159.0},{"matchId":24,"team1Name":"BRAZIL","team2Name":"COSTA RICA","matchTime":"2018-06-22 17:30:00.0","bounty":50,"winner":"BRAZIL","numberOfBetForTeam1":36,"numberOfBetForTeam2":5,"numberOfBetForDraw":4,"totalWins":36,"totalBets":45,"winningBounty":13.0},{"matchId":25,"team1Name":"NIGERIA","team2Name":"ICELAND","matchTime":"2018-06-22 20:30:00.0","bounty":50,"winner":"NIGERIA","numberOfBetForTeam1":9,"numberOfBetForTeam2":26,"numberOfBetForDraw":10,"totalWins":9,"totalBets":45,"winningBounty":200.0},{"matchId":26,"team1Name":"SERBIA","team2Name":"SWITZERLAND","matchTime":"2018-06-22 23:30:00.0","bounty":50,"winner":"SWITZERLAND","numberOfBetForTeam1":7,"numberOfBetForTeam2":23,"numberOfBetForDraw":15,"totalWins":23,"totalBets":45,"winningBounty":48.0},{"matchId":27,"team1Name":"BELGIUM","team2Name":"TUNISIA","matchTime":"2018-06-23 17:30:00.0","bounty":50,"winner":"BELGIUM","numberOfBetForTeam1":32,"numberOfBetForTeam2":2,"numberOfBetForDraw":4,"totalWins":32,"totalBets":38,"winningBounty":9.0},{"matchId":28,"team1Name":"SOUTH KOREA","team2Name":"MEXICO","matchTime":"2018-06-23 20:30:00.0","bounty":50,"winner":"MEXICO","numberOfBetForTeam1":3,"numberOfBetForTeam2":32,"numberOfBetForDraw":7,"totalWins":32,"totalBets":42,"winningBounty":16.0},{"matchId":29,"team1Name":"GERMANY","team2Name":"SWEDEN","matchTime":"2018-06-23 23:30:00.0","bounty":50,"winner":"GERMANY","numberOfBetForTeam1":23,"numberOfBetForTeam2":4,"numberOfBetForDraw":16,"totalWins":23,"totalBets":43,"winningBounty":43.0},{"matchId":30,"team1Name":"ENGLAND","team2Name":"PANAMA","matchTime":"2018-06-24 17:30:00.0","bounty":50,"winner":"ENGLAND","numberOfBetForTeam1":37,"numberOfBetForDraw":3,"totalWins":37,"totalBets":40,"winningBounty":4.0},{"matchId":31,"team1Name":"JAPAN","team2Name":"SENEGAL","matchTime":"2018-06-24 20:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":9,"numberOfBetForTeam2":22,"numberOfBetForDraw":8,"totalWins":8,"totalBets":39,"winningBounty":194.0},{"matchId":32,"team1Name":"POLAND","team2Name":"COLOMBIA","matchTime":"2018-06-24 23:30:00.0","bounty":50,"winner":"COLOMBIA","numberOfBetForTeam1":11,"numberOfBetForTeam2":20,"numberOfBetForDraw":11,"totalWins":20,"totalBets":42,"winningBounty":55.0},{"matchId":33,"team1Name":"URUGUAY","team2Name":"RUSSIA","matchTime":"2018-06-25 19:30:00.0","bounty":50,"winner":"URUGUAY","numberOfBetForTeam1":16,"numberOfBetForTeam2":16,"numberOfBetForDraw":14,"totalWins":16,"totalBets":46,"winningBounty":94.0},{"matchId":34,"team1Name":"SAUDI ARABIA","team2Name":"EGYPT","matchTime":"2018-06-25 19:30:00.0","bounty":50,"winner":"SAUDI ARABIA","numberOfBetForTeam1":4,"numberOfBetForTeam2":35,"numberOfBetForDraw":8,"totalWins":4,"totalBets":47,"winningBounty":538.0},{"matchId":35,"team1Name":"SPAIN","team2Name":"MOROCCO","matchTime":"2018-06-25 23:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":45,"numberOfBetForTeam2":1,"numberOfBetForDraw":4,"totalWins":4,"totalBets":50,"winningBounty":575.0},{"matchId":36,"team1Name":"IRAN","team2Name":"PORTUGAL","matchTime":"2018-06-25 23:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":5,"numberOfBetForTeam2":31,"numberOfBetForDraw":12,"totalWins":12,"totalBets":48,"winningBounty":150.0},{"matchId":37,"team1Name":"AUSTRALIA","team2Name":"PERU","matchTime":"2018-06-26 19:30:00.0","bounty":50,"winner":"PERU","numberOfBetForTeam1":19,"numberOfBetForTeam2":22,"numberOfBetForDraw":12,"totalWins":22,"totalBets":53,"winningBounty":70.0},{"matchId":38,"team1Name":"DENMARK","team2Name":"FRANCE","matchTime":"2018-06-26 19:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":13,"numberOfBetForTeam2":16,"numberOfBetForDraw":23,"totalWins":23,"totalBets":52,"winningBounty":63.0},{"matchId":39,"team1Name":"NIGERIA","team2Name":"ARGENTINA","matchTime":"2018-06-26 23:30:00.0","bounty":50,"winner":"ARGENTINA","numberOfBetForTeam1":15,"numberOfBetForTeam2":30,"numberOfBetForDraw":8,"totalWins":30,"totalBets":53,"winningBounty":38.0},{"matchId":40,"team1Name":"ICELAND","team2Name":"CROATIA","matchTime":"2018-06-26 23:30:00.0","bounty":50,"winner":"CROATIA","numberOfBetForTeam1":12,"numberOfBetForTeam2":26,"numberOfBetForDraw":16,"totalWins":26,"totalBets":54,"winningBounty":54.0},{"matchId":41,"team1Name":"SOUTH KOREA","team2Name":"GERMANY","matchTime":"2018-06-27 19:30:00.0","bounty":50,"winner":"SOUTH KOREA","numberOfBetForTeam1":2,"numberOfBetForTeam2":46,"numberOfBetForDraw":3,"totalWins":2,"totalBets":51,"winningBounty":1225.0},{"matchId":42,"team1Name":"MEXICO","team2Name":"SWEDEN","matchTime":"2018-06-27 19:30:00.0","bounty":50,"winner":"SWEDEN","numberOfBetForTeam1":23,"numberOfBetForTeam2":9,"numberOfBetForDraw":20,"totalWins":9,"totalBets":52,"winningBounty":239.0},{"matchId":43,"team1Name":"SERBIA","team2Name":"BRAZIL","matchTime":"2018-06-27 23:30:00.0","bounty":50,"winner":"BRAZIL","numberOfBetForTeam1":9,"numberOfBetForTeam2":29,"numberOfBetForDraw":14,"totalWins":29,"totalBets":52,"winningBounty":40.0},{"matchId":44,"team1Name":"SWITZERLAND","team2Name":"COSTA RICA","matchTime":"2018-06-27 23:30:00.0","bounty":50,"winner":"draw","numberOfBetForTeam1":31,"numberOfBetForTeam2":8,"numberOfBetForDraw":14,"totalWins":14,"totalBets":53,"winningBounty":139.0},{"matchId":45,"team1Name":"JAPAN","team2Name":"POLAND","matchTime":"2018-06-28 19:30:00.0","bounty":50,"winner":"","numberOfBetForTeam1":11,"numberOfBetForTeam2":4,"numberOfBetForDraw":9,"totalBets":24},{"matchId":46,"team1Name":"SENEGAL","team2Name":"COLOMBIA","matchTime":"2018-06-28 19:30:00.0","bounty":50,"winner":"","numberOfBetForTeam1":9,"numberOfBetForTeam2":9,"numberOfBetForDraw":6,"totalBets":24},{"matchId":47,"team1Name":"PANAMA","team2Name":"TUNISIA","matchTime":"2018-06-28 23:30:00.0","bounty":50,"winner":"","numberOfBetForTeam1":3,"numberOfBetForTeam2":12,"numberOfBetForDraw":8,"totalBets":23},{"matchId":48,"team1Name":"ENGLAND","team2Name":"BELGIUM","matchTime":"2018-06-28 23:30:00.0","bounty":50,"winner":"","numberOfBetForTeam1":7,"numberOfBetForTeam2":10,"numberOfBetForDraw":5,"totalBets":22}];
  }
}
