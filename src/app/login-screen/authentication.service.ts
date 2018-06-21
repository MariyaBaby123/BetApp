import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserData} from './../api-response.model';
import {LocalStorageService} from 'angular-2-local-storage';


@Injectable()
export class AuthenticationService {

  private apiEndpoint = 'http://13.232.96.213:8080/betterapp/service/';
  constructor(private localStorageService: LocalStorageService, private http: HttpClient, private _router: Router) {}
  signup(user) {
    const apiURL = this.apiEndpoint + 'createUser';
    const response = this.http.post<UserData>(apiURL, user);
    return response;
  }

  logout() {
    this.localStorageService.remove('username');
    this.localStorageService.remove('useremail');
    console.log('removed user');
  }

  login(user) {
    const apiURL = this.apiEndpoint + 'authenticate';
    const response = this.http.post<UserData>(apiURL, user);
    return response;
  }

  setUser(user) {
    this.localStorageService.set('username', user.userName);
    this.localStorageService.set('useremail', user.userEmail);
  }

  checkCredentials() {
    if (this.localStorageService.get('username') === null) {
      this._router.navigate(['Login']);
    }
  }

}
