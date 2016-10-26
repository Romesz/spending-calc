import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent {

  isLoggedIn: boolean = false;
  @Output() isLogged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: Http) {
    this.checkAuth();
  }

  checkAuth () {
    this.http.get('/isAuth')
    .map(response => response.json())
    .subscribe(
      response => this.setLoggedIn(response)
    );
  }

  setLoggedIn (res) {
    if (res.auth === false) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
    this.isLogged.next(this.isLoggedIn);
  }
}
