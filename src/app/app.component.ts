import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  title = 'bai4';
  messageF = '';
  // tslint:disable-next-line:typedef
  showEvent(envent) {
    this.name = envent.target.value;
  }
  // tslint:disable-next-line:typedef
  finishedCountdown(){
    this.messageF = 'finished!';
  }
}
