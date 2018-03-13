import { Component } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Round } from '../round';
import {TournamentRunnerService} from '../../tournament-runner.service';

@Component({
  selector: 'bracket-round4',
  templateUrl: './round4.component.html',
  styleUrls: ['./round4.component.css']
})
export class Round4Component extends Round {

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    super(teamsService, tournamentRunner);
  }

}
