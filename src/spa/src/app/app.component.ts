import { Component } from '@angular/core';
import appVersion from '../assets/app-version.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spa';
  appVersion = appVersion.semanticVersion;
}
