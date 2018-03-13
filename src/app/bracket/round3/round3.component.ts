import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Round } from '../round';
import {TournamentRunnerService} from '../../tournament-runner.service';

@Component({
  selector: 'bracket-round3',
  templateUrl: './round3.component.html',
  styleUrls: ['./round3.component.css']
})
export class Round3Component extends Round implements OnInit {

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    super(teamsService, tournamentRunner);
  }

  ngOnInit() {
  }

  runSimulation(): void {
    this.tournamentRunner.queueSimulation(53, 3, this.tournamentRunner.getWinner(41), this.tournamentRunner.getWinner(42));
    this.tournamentRunner.queueSimulation(54, 3, this.tournamentRunner.getWinner(43), this.tournamentRunner.getWinner(44));

    this.tournamentRunner.queueSimulation(55, 3, this.tournamentRunner.getWinner(45), this.tournamentRunner.getWinner(46));
    this.tournamentRunner.queueSimulation(56, 3, this.tournamentRunner.getWinner(47), this.tournamentRunner.getWinner(48));

    this.tournamentRunner.queueSimulation(49, 3, this.tournamentRunner.getWinner(3), this.tournamentRunner.getWinner(34));
    this.tournamentRunner.queueSimulation(50, 3, this.tournamentRunner.getWinner(35), this.tournamentRunner.getWinner(36));

    this.tournamentRunner.queueSimulation(51, 3, this.tournamentRunner.getWinner(37), this.tournamentRunner.getWinner(38));
    this.tournamentRunner.queueSimulation(52, 3, this.tournamentRunner.getWinner(39), this.tournamentRunner.getWinner(40));

    this.tournamentRunner.simulateGamesInQueue();
  }

}
