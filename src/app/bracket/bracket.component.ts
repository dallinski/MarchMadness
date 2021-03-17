import {Component, EventEmitter, Output} from '@angular/core';
import {TournamentRunnerService} from '../tournament-runner.service';

@Component({
  selector: 'bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent {
  public simulationNumber = 100;
  public selectedYear = 2021;
  @Output() public onSelectedYearChange: EventEmitter<number> = new EventEmitter();

  private tournamentRunner: TournamentRunnerService;

  constructor(tournamentRunner: TournamentRunnerService) {
    this.tournamentRunner = tournamentRunner;
  }

  simulateAllRounds(): void {
    this.tournamentRunner.simulateAllRounds();
  }

  simulateXTimes(): void {
    for (let i = 0; i < this.simulationNumber; i++) {
      this.tournamentRunner.simulateAllRounds();
    }
  }

  updateYear(): void {
    this.onSelectedYearChange.emit(Number(this.selectedYear));
  }
}
