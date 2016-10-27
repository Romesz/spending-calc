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
  items:Array<Object>;
  showTable:any = null;

  constructor(private http:Http) {
    this.model= {
      date: ''
    };
  }

  searchSpending() {
    let body = `date=${this.model.date}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('/retriveByDate', body, options)
    .map(response => response.json())
    .subscribe(
      response => this.fetchResponse(response),
      err => console.log(err)
    );
  }

  fetchResponse(resp) {
    this.items = resp;
    this.showTable = (this.items !== undefined && this.items.length > 0);
  }
}
