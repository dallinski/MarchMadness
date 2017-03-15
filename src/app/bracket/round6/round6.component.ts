import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Round } from '../round';
import {TournamentRunnerService} from '../../tournament-runner.service';

@Component({
  selector: 'bracket-round6',
  templateUrl: './round6.component.html',
  styleUrls: ['./round6.component.css']
})
export class Round6Component extends Round implements OnInit {

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    super(teamsService, tournamentRunner);
  }

  ngOnInit() {
  }

  runSimulation(): void {
    this.tournamentRunner.queueSimulation(64, 0, this.tournamentRunner.getWinner(62), this.tournamentRunner.getWinner(63));
    this.tournamentRunner.simulateAll();
  }

}
