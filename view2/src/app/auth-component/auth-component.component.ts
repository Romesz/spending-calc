import { Component, Input } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { AppmodelProvider } from '../appmodel-provider';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css'],
  providers: [ AppmodelProvider ]
})
export class AuthComponentComponent {

  isLoggedIn: boolean = false;
  appProvider;
  //@Input() parentTitle: string = '';

  constructor(private http: Http, appProvider: AppmodelProvider) {
    this.checkAuth();
    this.appProvider = appProvider;
    appProvider.auth = true;
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
    //this.appProvider.auth(this.isLoggedIn);
    this.appProvider.auth = this.isLoggedIn;
  }
}
