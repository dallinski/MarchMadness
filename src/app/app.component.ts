import {Component, OnInit} from '@angular/core';
import {Team} from './team';
import {TeamsService} from './teams.service';
import {TournamentRunnerService} from './tournament-runner.service';
import {AlgorithmService} from './algorithm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public algorithmToTest: (game: any, team1: Team, team2: Team) => void;

  private tournamentRunner: TournamentRunnerService;
  private teamsService: TeamsService;
  private algorithmService: AlgorithmService;

  constructor(tournamentRunner: TournamentRunnerService, teamsService: TeamsService, algorithmService: AlgorithmService) {
    this.tournamentRunner = tournamentRunner;
    this.teamsService = teamsService;
    this.algorithmService = algorithmService;
  }

  ngOnInit() {
    this.updateSelectedYear(2021);
  }

  updateSelectedYear(selectedYear: number): void {
    switch (selectedYear) {
      case 2017: {
        this.algorithmToTest = this.algorithmService.algorithm2017;
        this.teamsService.setTeamsJson('./assets/teams_2017.json');
        break;
      }
      case 2018: {
        this.algorithmToTest = this.algorithmService.algorithm2018;
        this.teamsService.setTeamsJson('./assets/teams_2018.json');
        break;
      }
      case 2019: {
        this.algorithmToTest = this.algorithmService.algorithm2019;
        this.teamsService.setTeamsJson('./assets/teams_2019.json');
        break;
      }
      case 2021: {
        this.algorithmToTest = this.algorithmService.algorithm2021;
        this.teamsService.setTeamsJson('./assets/teams_2021.json');
        break;
      }
      default: {
        throw new Error('Unexpected year selected');
      }
    }
    this.tournamentRunner.setAlgorithm(this.algorithmToTest);
  }

}
