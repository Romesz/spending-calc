import { Component } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Outcome } from '../outcome';


@Component({
  selector: 'app-add-componenet',
  templateUrl: './add-componenet.component.html',
  styleUrls: ['./add-componenet.component.css']
})
export class AddComponenetComponent {

  private added: Boolean = false;
  private model: Outcome;

  constructor(private http: Http) {
    this.model = {
      item: '',
      amount: null
    }

    this.getAll();
  }

  AddOutcome() {
    if (this.model.amount === 0)
      return;

    let body = `title=${this.model.item}&price=${this.model.amount}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('/add', body, options)
    .map(response => response.json())
    .subscribe(
      response => console.log(response),
      err => console.log(err),
      () => console.log('Saving added')
    );

    this.added = true;
    setTimeout(() => {
      this.added = false;
    }, 3000);
  }

  getAll() {
    this.http.get('/data')
    .map(response => response.json())
    .subscribe(
      response => console.log(response)
    );
  }
}
