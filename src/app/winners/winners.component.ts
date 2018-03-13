import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  @Input() public winnerCountMap: Map<string, number>;

  constructor() { }

  ngOnInit() {
  }

  getKeys() {
    const teamNames: string[] = Array.from(this.winnerCountMap.keys());
    teamNames.sort((teamA: string, teamB: string) => {
      return this.winnerCountMap.get(teamB) - this.winnerCountMap.get(teamA);
    });
    return teamNames;
  }

  getWinPercent(teamName: string): number {
    if (this.winnerCountMap.size === 1) {
      return 1;
    } else {
      const numberOfSimulationRuns: number = this.getNumberOfSimulationsRun();
      const numberOfWinsForTeam: number = this.winnerCountMap.get(teamName);
      return numberOfWinsForTeam / numberOfSimulationRuns;
    }
  }

  getNumberOfSimulationsRun(): number {
    if (this.winnerCountMap.size < 2) {
      return this.winnerCountMap.size;
    } else {
      return Array.from(this.winnerCountMap.values()).reduce((a: number, b: number) => { return a + b; });
    }
  }

}
