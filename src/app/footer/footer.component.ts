import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showEvent(envent) {
    this.name = envent.target.value;
  }
}
