import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginData, RegisterData} from './login-screen.model';
import {User} from '../leader-board/user.model';
import {AuthenticationService} from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css', '../app.component.css']
})
export class LoginScreenComponent implements OnInit {

  isLoginScreen: boolean;
  loginDataObj = <LoginData>{};
  registerDataObj = <RegisterData>{};
  invalidLogin: boolean;
  invalidEmail: boolean;
  isLoadingLogin: boolean;
  isLoadingRegister: boolean;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.isLoginScreen = true;
    this.setLoginDataObject();
    this.invalidLogin = false;
    this.isLoadingLogin = false;
    this.isLoadingRegister = false;
  }

  onLoginFormClick (): void {
    this.isLoginScreen = true;
  }

  setLoginDataObject (): void {
    this.loginDataObj = {
      userEmail: null,
      password: null
    };
  }

  onRegisterFormClick (): void {
    this.isLoginScreen = false;
  }

  Login (loginForm): void {
    this.isLoadingLogin = true;
    let user = <User>{};
    user.userEmail = this.loginDataObj.userEmail;
    user.userPassword = this.loginDataObj.password;
    this.authService.login(user).subscribe
    (user_list => {
      this.isLoadingLogin = false;
      if (user_list.statusCode === 'FAILURE' || !user_list.users || !user_list.users[0]) {
        this.invalidLogin = true;
      } else {
        this.invalidLogin = false;
        this.authService.setUser(user_list.users[0]);
        this.router.navigate(['/home']);
      }
    });
  }

  Register(RegisterForm): void {
    let user = <User>{};
    user.userEmail = this.registerDataObj.email;
    user.userName = this.registerDataObj.userName;
    user.userPassword = this.registerDataObj.password;
    if (this.validateEmail(this.registerDataObj.email)) {
      this.isLoadingRegister = true;    
	  this.authService.signup(user).subscribe
      (user_list => {
        this.isLoadingRegister = false;
        if (user_list.statusCode === 'SUCCESS') {
          alert('User registered successfully. You can login now');
          this.isLoginScreen = true;
        } else {
          alert('User registration failed! Please try again or contact admin');
        }
      });
    } else {
      this.invalidEmail = true;
    }

  }

  validateEmail(email): boolean {
    const validRegExp = /^[a-z0-9](\.?-?[a-z0-9]){5,}@nielsen\.com$/;

    let valid = true;

    if (!(validRegExp.test(email.trim()))) {
      valid = false;
    }
    return valid;
  }

}
