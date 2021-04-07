import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownTimeComponent } from './countdown-time/countdown-time.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import {FormsModule} from '@angular/forms';
import { LikesComponent } from './likes/likes.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimeComponent,
    HackerNewsComponent,
    LikesComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
