import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<ul><li><a routerLink="/">Home</a></li><li><a routerLink="/about">About</a></li><li><a routerLink="/contact">Contact</a></li></ul><hr/><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
