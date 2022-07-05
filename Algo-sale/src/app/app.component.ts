import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Algo-sale';
  isThemeChanged: boolean = false;
  stacking: boolean = false;
  changeTheme($event: boolean) {
    this.isThemeChanged = $event;
    return this.isThemeChanged;
    console.log('saba');
    console.log(2223);
  }
}
