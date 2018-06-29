import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatchData, UserData} from './api-response.model';


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

  getUserTrackRecord(user) {
    const apiURL = this.apiEndpoint + 'getUserTrackRecord';
    return this.http.post<MatchData>(apiURL, user);
  }

  getSelectedMatchForUserView() {
    return this.selectedMatchForUserView;
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

}
