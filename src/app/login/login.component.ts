import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}

  handleClick() {
    if (this.username == '') {
      this.errorMessage = 'username is required';
    } else if (this.password == '') {
      this.errorMessage = 'password is required';
    } else {
      this.errorMessage = '';
      let res = this.auth.login(this.username, this.password);
      if (res == 200) {
        this.router.navigate(['home']);
      } else {
        this.errorMessage = 'invalid credentials';
      }
    }
  }
}
