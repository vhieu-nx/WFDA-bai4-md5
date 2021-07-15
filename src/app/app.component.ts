import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bai4';
  messageF = '';
  // tslint:disable-next-line:typedef
  finishedCountdown(){
    this.messageF = 'finished!';
  }
}
