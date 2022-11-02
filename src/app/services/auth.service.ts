import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  login(username: string, password: string) {
    if (username == 'user' && password == '123') {
      return 200;
    } else {
      return 500;
    }
  }
  logOut() {
    this.router.navigate(['login']);
  }
}
