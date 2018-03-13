import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Round } from '../round';
import {TournamentRunnerService} from '../../tournament-runner.service';

@Component({
  selector: 'bracket-round4',
  templateUrl: './round4.component.html',
  styleUrls: ['./round4.component.css']
})
export class Round4Component extends Round implements OnInit {

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    super(teamsService, tournamentRunner);
  }

  ngOnInit() {
  }

  runSimulation(): void {
    this.tournamentRunner.queueSimulation(60, 2, this.tournamentRunner.getWinner(53), this.tournamentRunner.getWinner(54));
    this.tournamentRunner.queueSimulation(61, 2, this.tournamentRunner.getWinner(55), this.tournamentRunner.getWinner(56));
    this.tournamentRunner.queueSimulation(58, 2, this.tournamentRunner.getWinner(49), this.tournamentRunner.getWinner(50));
    this.tournamentRunner.queueSimulation(59, 2, this.tournamentRunner.getWinner(51), this.tournamentRunner.getWinner(52));

    this.tournamentRunner.simulateGamesInQueue();
  }

}
