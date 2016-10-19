import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponenetComponent } from './add-componenet/add-componenet.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { DatepickerComponentComponent } from './datepicker-component/datepicker-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponenetComponent,
    AuthComponentComponent,
    DatepickerComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
