import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatchData, UserData} from './api-response.model';


@Injectable()
export class AppService {
  private apiEndpoint = 'http://localhost:8080/betterapp/service/';
  constructor(private http: HttpClient) {}

  getUpcomingMatches() {
    const apiURL = this.apiEndpoint + 'upcomingMatches';
    return this.http.get<MatchData>(apiURL);
  }

  getLeaderBoard() {
    const apiURL = this.apiEndpoint + 'leaderboard';
    return this.http.get<UserData>(apiURL);
  }

  getUserReportCard() {
    const apiURL = this.apiEndpoint + 'userReportCard?userEmail=' + 'Sharath Ravi';
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

}
