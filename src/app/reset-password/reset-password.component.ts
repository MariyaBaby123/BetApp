import { Component, OnInit } from '@angular/core';
import {User} from '../leader-board/user.model';
import {AuthenticationService} from '../login-screen/authentication.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css', '../login-screen/login-screen.component.css', '../app.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user = <User>{};
  isLoadingPassword;
  constructor(private authService: AuthenticationService, private route: ActivatedRoute , private router: Router ) { }

  ngOnInit() {
    this.user.userEmail = this.route.snapshot.queryParams['userEmail'];
    this.user.code = this.route.snapshot.queryParams['code'];
  }

  resetPassword() {
    this.isLoadingPassword = true;
    this.authService.resetPassword(this.user).subscribe
    (user_list => {
      this.isLoadingPassword = false;
      if (user_list.statusCode === 'SUCCESS') {
        alert('User password reset successfully. Please login');
        this.router.navigate(['login']);
      } else {
        alert('User registration failed! Please try again or contact admin');
      }
    });
  }
}
