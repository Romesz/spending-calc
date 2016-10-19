import { Component } from '@angular/core';
import { AppmodelProvider } from './appmodel-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppmodelProvider ]
})
export class AppComponent {
  title = 'Spending Calc';
  //parentTitle: string = 'works';
  constructor(public appProvider:AppmodelProvider) {
    setTimeout(()=> {
      console.log(appProvider.auth);
    }, 2000);
  }
}
