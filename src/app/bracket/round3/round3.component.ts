import { Component } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Round } from '../round';
import {TournamentRunnerService} from '../../tournament-runner.service';

@Component({
  selector: 'bracket-round3',
  templateUrl: './round3.component.html',
  styleUrls: ['./round3.component.css']
})
export class Round3Component extends Round {

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    super(teamsService, tournamentRunner);
  }

}
