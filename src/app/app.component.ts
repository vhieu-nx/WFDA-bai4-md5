import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bai4';
  messageF = '';
  finishedCountdown(){
    this.messageF = "finished!";
  }
}
