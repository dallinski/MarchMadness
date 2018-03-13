import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BracketComponent } from './bracket/bracket.component';
import { Round1Component } from './bracket/round1/round1.component';
import { Round2Component } from './bracket/round2/round2.component';
import { Round3Component } from './bracket/round3/round3.component';
import { Round4Component } from './bracket/round4/round4.component';
import { Round5Component } from './bracket/round5/round5.component';
import { Round6Component } from './bracket/round6/round6.component';
import { TeamsService } from './teams.service';
import { TeamPipePipe } from './team-pipe.pipe';
import { TournamentRunnerService } from './tournament-runner.service';
import { AlgorithmBoxComponent } from './algorithm-box/algorithm-box.component';
import { WinnersComponent } from './winners/winners.component';

@NgModule({
  declarations: [
    AppComponent,
    BracketComponent,
    Round1Component,
    Round2Component,
    Round3Component,
    Round4Component,
    Round5Component,
    Round6Component,
    TeamPipePipe,
    AlgorithmBoxComponent,
    WinnersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TeamsService, TournamentRunnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
