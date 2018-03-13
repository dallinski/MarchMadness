import {Component} from '@angular/core';
import {TournamentRunnerService} from '../tournament-runner.service';

@Component({
  selector: 'bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent {
  private tournamentRunner: TournamentRunnerService;

  constructor(tournamentRunner: TournamentRunnerService) {
    this.tournamentRunner = tournamentRunner;
  }

  simulateAllRounds(): void {
    this.tournamentRunner.simulateAllRounds();
  }

  simulateXTimes(x: number): void {
    for (let i = 0; i < x; i++) {
      this.tournamentRunner.simulateAllRounds();
    }
  }
}
