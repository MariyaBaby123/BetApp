import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class AuthenticationService {

  signup() {
    /*Call service to insert new user*/
    return true;
  }

  logout() {
    localStorage.removeItem('user');
    console.log('removed user');
  }

  login(user) {
    /*Call service to check credentails*/
    const isAuthenticatedUser = true;
    if (isAuthenticatedUser) {
      localStorage.setItem('user', 'sangeeta') ;
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem('user') === null) {
      console.log('Not logged in ');
    }
  }
}
