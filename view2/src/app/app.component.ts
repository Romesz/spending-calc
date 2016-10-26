import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spending Calc';
  showDashbord: boolean = false;

  constructor() {}

  setLogged(value:boolean) {
    console.log(value);
    this.showDashbord = value;
  }
}
