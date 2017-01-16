import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';
import { AlertModule } from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about/about.component';
import { ContactComponent }  from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent, UserComponent, AboutComponent, ContactComponent
  ],
  imports: [
  AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
