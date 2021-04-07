import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.scss']
})
export class CountdownTimeComponent implements OnInit {
  seconds = 10;
  @Input('times')


  get times(){
    return this.seconds;
  }

  set times(value){
    let v = Number(value);
    this.seconds = Number.isNaN(v)? 20 : v;
    this.resetSecond = Number.isNaN(v)? 20 : v
  }

  resetSecond;

  countdownStart : any;

  start() {
    this.countdownStart = setInterval(()=>{
      this.seconds --;
      this.countdownFinished();
    }, 200)
  }
  stop() {
    clearInterval(this.countdownStart)
  }

  reset(){
    this.stop();
    this.seconds = this.resetSecond;
  }

  @Output()
  isFinished = new EventEmitter<boolean>();
  private countdownFinished(){
    if (this.seconds == 0){
      this.stop();
      this.isFinished.emit(true);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
