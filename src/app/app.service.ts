import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatchData, UserData, OddsData, ChampionData , OddsDataForJackpot} from './api-response.model';


@Injectable()
export class AppService {
  private apiEndpoint = 'http://13.232.96.213:8080/betterapp/service/';
  private selectedMatchForUserView;
  private selectedMatchNameForUserView;
  constructor(private http: HttpClient) {}

  getUpcomingMatches(userEmail) {
    const apiURL = this.apiEndpoint + 'upcomingMatches?userEmail=' + userEmail;
    return this.http.get<MatchData>(apiURL);
  }

  getLeaderBoard() {
    const apiURL = this.apiEndpoint + 'leaderboard';
    return this.http.get<UserData>(apiURL);
  }

  getUserReportCard(userEmail) {
    const apiURL = this.apiEndpoint + 'userReportCard?userEmail=' + userEmail;
    return this.http.get<UserData>(apiURL);
  }

  vote(prediction) {
    const apiURL = this.apiEndpoint + 'vote';
    return this.http.post<UserData>(apiURL, prediction);
  }

  voteForChampion(champion) {
    const apiURL = this.apiEndpoint + 'voteForChampion';
    return this.http.post<ChampionData>(apiURL, champion);
  }

  voteForChampion2(champion) {
    const apiURL = this.apiEndpoint + 'voteForChampion2';
    return this.http.post<ChampionData>(apiURL, champion);
  }

  getUserTrackRecord(user) {
    const apiURL = this.apiEndpoint + 'getUserTrackRecord';
    return this.http.post<MatchData>(apiURL, user);
  }

  getSelectedMatchForUserView() {
    return this.selectedMatchForUserView;
  }

  getSelectedMatchOdds(matchId) {
    const apiURL = this.apiEndpoint + 'getOddsForMatch?matchId=' + matchId;
    return this.http.get<OddsData>(apiURL);
  }

  getSelectedMatchNameForUserView() {
    return this.selectedMatchNameForUserView;
  }

  setSelectedMatchNameForUserView(selectedMatchNameForUserView) {
    this.selectedMatchNameForUserView = selectedMatchNameForUserView;
  }

  setSelectedMatchForUserView(selectedMatchForUserView) {
    this.selectedMatchForUserView = selectedMatchForUserView;
  }

  getAllPredictionsForMatch(matchId) {
    const apiURL = this.apiEndpoint + 'getAllPredictionsForMatch?matchId=' + matchId;
    return this.http.get<UserData>(apiURL);
  }

  getPastMatchStatistics() {
    const apiURL = this.apiEndpoint + 'getMatchStatistics';
    return this.http.get<MatchData>(apiURL);
  }

  getMatchStatisticsJackPot1(matchId) {
    const apiURL = this.apiEndpoint + 'getMatchStatisticsJackPot1?matchId=' + matchId;
    return this.http.get<UserData>(apiURL);
  }

  getOddsForJackpot1(matchId) {
    const apiURL = this.apiEndpoint + 'getOddsForJackpot1?matchId=' + matchId;
    return this.http.get<OddsDataForJackpot>(apiURL);
  }

}
