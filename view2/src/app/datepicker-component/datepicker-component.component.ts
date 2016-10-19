import { Component} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Date } from '../date';

@Component({
  selector: 'app-datepicker-component',
  templateUrl: './datepicker-component.component.html',
  styleUrls: ['./datepicker-component.component.css']
})
export class DatepickerComponentComponent {

  model:Date;

  constructor(private http:Http) { 
    this.model= {
      date: ''
    };
  }

  searchSpending() {
    console.log(this.model.date);
    let body = `date=${this.model.date}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('/retriveByDate', body, options)
    .map(response => response.json())
    .subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}
