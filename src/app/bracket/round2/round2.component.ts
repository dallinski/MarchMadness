import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Round } from '../round';
import {TournamentRunnerService} from '../../tournament-runner.service';

@Component({
  selector: 'bracket-round2',
  templateUrl: './round2.component.html',
  styleUrls: ['./round2.component.css']
})
export class Round2Component extends Round implements OnInit {

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    super(teamsService, tournamentRunner);
  }

  ngOnInit() {
  }

  runSimulation(): void {
    this.tournamentRunner.queueSimulation(41, 4, this.tournamentRunner.getWinner(18), this.tournamentRunner.getWinner(19));
    this.tournamentRunner.queueSimulation(42, 4, this.tournamentRunner.getWinner(20), this.tournamentRunner.getWinner(21));
    this.tournamentRunner.queueSimulation(43, 4, this.tournamentRunner.getWinner(22), this.tournamentRunner.getWinner(23));
    this.tournamentRunner.queueSimulation(44, 4, this.tournamentRunner.getWinner(24), this.tournamentRunner.getWinner(25));

    this.tournamentRunner.queueSimulation(45, 4, this.tournamentRunner.getWinner(26), this.tournamentRunner.getWinner(27));
    this.tournamentRunner.queueSimulation(46, 4, this.tournamentRunner.getWinner(28), this.tournamentRunner.getWinner(29));
    this.tournamentRunner.queueSimulation(47, 4, this.tournamentRunner.getWinner(30), this.tournamentRunner.getWinner(31));
    this.tournamentRunner.queueSimulation(48, 4, this.tournamentRunner.getWinner(32), this.tournamentRunner.getWinner(33));

    this.tournamentRunner.queueSimulation(3, 4, this.tournamentRunner.getWinner(65), this.tournamentRunner.getWinner(66));
    this.tournamentRunner.queueSimulation(34, 4, this.tournamentRunner.getWinner(4), this.tournamentRunner.getWinner(5));
    this.tournamentRunner.queueSimulation(35, 4, this.tournamentRunner.getWinner(6), this.tournamentRunner.getWinner(7));
    this.tournamentRunner.queueSimulation(36, 4, this.tournamentRunner.getWinner(8), this.tournamentRunner.getWinner(9));

    this.tournamentRunner.queueSimulation(37, 4, this.tournamentRunner.getWinner(10), this.tournamentRunner.getWinner(11));
    this.tournamentRunner.queueSimulation(38, 4, this.tournamentRunner.getWinner(12), this.tournamentRunner.getWinner(13));
    this.tournamentRunner.queueSimulation(39, 4, this.tournamentRunner.getWinner(14), this.tournamentRunner.getWinner(15));
    this.tournamentRunner.queueSimulation(40, 4, this.tournamentRunner.getWinner(16), this.tournamentRunner.getWinner(17));

    this.tournamentRunner.simulateAll();
  }

}
