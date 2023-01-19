import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    setInterval(() => {
      this.name += '!';
    }, 5000);
  }

  clickHappened() {
    this.name += '!';
  }
}
