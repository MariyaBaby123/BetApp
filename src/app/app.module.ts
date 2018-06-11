import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchPipe} from './search.pipe';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { BountyComponent } from './bounty/bounty.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AppService} from './app.service';
import {PagerService} from './pager.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    LeaderBoardComponent,
    BountyComponent,
    NavBarComponent,
    AuthenticationComponent,
    SearchPipe,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
