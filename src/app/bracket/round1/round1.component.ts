import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Round } from '../round';
import {TournamentRunnerService} from '../../tournament-runner.service';

@Component({
  selector: 'bracket-round1',
  templateUrl: './round1.component.html',
  styleUrls: ['./round1.component.css']
})
export class Round1Component extends Round implements OnInit {

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    super(teamsService, tournamentRunner);
  }

  ngOnInit() {
  }

  runSimulation(): void {
    this.tournamentRunner.queueSimulation(18, 5, this.teamsService.getTeam('midwest', 1), this.teamsService.getTeam('midwest', 16));
    this.tournamentRunner.queueSimulation(25, 5, this.teamsService.getTeam('midwest', 2), this.teamsService.getTeam('midwest', 15));
    this.tournamentRunner.queueSimulation(23, 5, this.teamsService.getTeam('midwest', 3), this.teamsService.getTeam('midwest', 14));
    this.tournamentRunner.queueSimulation(21, 5, this.teamsService.getTeam('midwest', 4), this.teamsService.getTeam('midwest', 13));
    this.tournamentRunner.queueSimulation(20, 5, this.teamsService.getTeam('midwest', 5), this.teamsService.getTeam('midwest', 12));
    this.tournamentRunner.queueSimulation(22, 5, this.teamsService.getTeam('midwest', 6), this.teamsService.getTeam('midwest', 11));
    this.tournamentRunner.queueSimulation(24, 5, this.teamsService.getTeam('midwest', 7), this.teamsService.getTeam('midwest', 10));
    this.tournamentRunner.queueSimulation(19, 5, this.teamsService.getTeam('midwest', 8), this.teamsService.getTeam('midwest', 9));

    this.tournamentRunner.queueSimulation(26, 5, this.teamsService.getTeam('west', 1), this.teamsService.getTeam('west', 16));
    this.tournamentRunner.queueSimulation(33, 5, this.teamsService.getTeam('west', 2), this.teamsService.getTeam('west', 15));
    this.tournamentRunner.queueSimulation(31, 5, this.teamsService.getTeam('west', 3), this.teamsService.getTeam('west', 14));
    this.tournamentRunner.queueSimulation(29, 5, this.teamsService.getTeam('west', 4), this.teamsService.getTeam('west', 13));
    this.tournamentRunner.queueSimulation(28, 5, this.teamsService.getTeam('west', 5), this.teamsService.getTeam('west', 12));
    this.tournamentRunner.queueSimulation(30, 5, this.teamsService.getTeam('west', 6), this.teamsService.getTeam('west', 11));
    this.tournamentRunner.queueSimulation(32, 5, this.teamsService.getTeam('west', 7), this.teamsService.getTeam('west', 10));
    this.tournamentRunner.queueSimulation(27, 5, this.teamsService.getTeam('west', 8), this.teamsService.getTeam('west', 9));

    this.tournamentRunner.queueSimulation(65, 5, this.teamsService.getTeam('east', 1), this.teamsService.getTeam('east', 16));
    this.tournamentRunner.queueSimulation(9, 5, this.teamsService.getTeam('east', 2), this.teamsService.getTeam('east', 15));
    this.tournamentRunner.queueSimulation(7, 5, this.teamsService.getTeam('east', 3), this.teamsService.getTeam('east', 14));
    this.tournamentRunner.queueSimulation(5, 5, this.teamsService.getTeam('east', 4), this.teamsService.getTeam('east', 13));
    this.tournamentRunner.queueSimulation(4, 5, this.teamsService.getTeam('east', 5), this.teamsService.getTeam('east', 12));
    this.tournamentRunner.queueSimulation(6, 5, this.teamsService.getTeam('east', 6), this.teamsService.getTeam('east', 11));
    this.tournamentRunner.queueSimulation(8, 5, this.teamsService.getTeam('east', 7), this.teamsService.getTeam('east', 10));
    this.tournamentRunner.queueSimulation(66, 5, this.teamsService.getTeam('east', 8), this.teamsService.getTeam('east', 9));

    this.tournamentRunner.queueSimulation(10, 5, this.teamsService.getTeam('south', 1), this.teamsService.getTeam('south', 16));
    this.tournamentRunner.queueSimulation(17, 5, this.teamsService.getTeam('south', 2), this.teamsService.getTeam('south', 15));
    this.tournamentRunner.queueSimulation(15, 5, this.teamsService.getTeam('south', 3), this.teamsService.getTeam('south', 14));
    this.tournamentRunner.queueSimulation(13, 5, this.teamsService.getTeam('south', 4), this.teamsService.getTeam('south', 13));
    this.tournamentRunner.queueSimulation(12, 5, this.teamsService.getTeam('south', 5), this.teamsService.getTeam('south', 12));
    this.tournamentRunner.queueSimulation(14, 5, this.teamsService.getTeam('south', 6), this.teamsService.getTeam('south', 11));
    this.tournamentRunner.queueSimulation(16, 5, this.teamsService.getTeam('south', 7), this.teamsService.getTeam('south', 10));
    this.tournamentRunner.queueSimulation(11, 5, this.teamsService.getTeam('south', 8), this.teamsService.getTeam('south', 9));

    this.tournamentRunner.simulateAll();
  }

}
