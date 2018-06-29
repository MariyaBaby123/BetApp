import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchPipe} from './search.pipe';
import {RouterModule, Routes} from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import {DataTableModule} from 'angular2-datatable';
import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { BountyComponent } from './bounty/bounty.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AppService} from './app.service';
import {AuthenticationService} from './login-screen/authentication.service';
import {PagerService} from './pager.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RulesComponent } from './rules/rules.component';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { UserViewComponent } from './user-view/user-view.component';
import { PredictionComponent } from './prediction/prediction.component';
import { MatchStatsComponent } from './match-stats/match-stats.component';


const appRoutes: Routes = [
  {path : '', component : LoginScreenComponent},
  {path : 'home', component : DashboardComponent},
  {path : 'match', component : MatchListComponent},
  {path : 'prediction', component : PredictionComponent},
  {path : 'matchStats', component : MatchStatsComponent},
  {path : '**', component : LoginScreenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    LeaderBoardComponent,
    BountyComponent,
    NavBarComponent,
    SearchPipe,
    RulesComponent,
    LoginScreenComponent,
    DashboardComponent,
    UserViewComponent,
    PredictionComponent,
    MatchStatsComponent

  ],
  imports: [
    BrowserModule,
    LocalStorageModule.withConfig({prefix: 'bet-app', storageType: 'localStorage'}),
    HttpClientModule,
    FormsModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppService,
    PagerService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }