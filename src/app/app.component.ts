import { Component } from '@angular/core';
import { AppConfiguration } from 'src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  config = {};

  constructor(config: AppConfiguration) {
    this.config = config;
  }
}
