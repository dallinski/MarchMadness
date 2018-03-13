import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Round } from '../round';
import {TournamentRunnerService} from '../../tournament-runner.service';

@Component({
  selector: 'bracket-round5',
  templateUrl: './round5.component.html',
  styleUrls: ['./round5.component.css']
})
export class Round5Component extends Round implements OnInit {

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    super(teamsService, tournamentRunner);
  }

  ngOnInit() {
  }

  runSimulation(): void {
    this.tournamentRunner.queueSimulation(63, 1, this.tournamentRunner.getWinner(58), this.tournamentRunner.getWinner(61));
    this.tournamentRunner.queueSimulation(62, 1, this.tournamentRunner.getWinner(60), this.tournamentRunner.getWinner(59));
    this.tournamentRunner.simulateGamesInQueue();
  }

}
