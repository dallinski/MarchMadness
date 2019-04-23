import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../team';

@Component({
  selector: 'winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  @Input() public winnerCountMap: Map<Team, number>;
  @Input() public sweet16EntryCountMap: Map<Team, number>;

  constructor() { }

  ngOnInit() {
  }

  getKeys() {
    const teams: Team[] = Array.from(this.winnerCountMap.keys());
    teams.sort((teamA: Team, teamB: Team) => {
      return this.winnerCountMap.get(teamB) - this.winnerCountMap.get(teamA);
    });
    return teams;
  }

  getSweet16Entrants() {
    const teams: Team[] = Array.from(this.sweet16EntryCountMap.keys());
    teams.sort((teamA: Team, teamB: Team) => {
      return this.sweet16EntryCountMap.get(teamB) - this.sweet16EntryCountMap.get(teamA);
    });
    return teams;
  }

  getWinPercent(team: Team): number {
    if (this.winnerCountMap.size === 1) {
      return 1;
    } else {
      const numberOfSimulationRuns: number = this.getNumberOfSimulationsRun();
      const numberOfWinsForTeam: number = this.winnerCountMap.get(team);
      return numberOfWinsForTeam / numberOfSimulationRuns;
    }
  }

  getSweet16EntryPercent(team: Team): number {
    if (this.sweet16EntryCountMap.size === 1) {
      return 1;
    } else {
      const numberOfSimulationRuns: number = this.getNumberOfSimulationsRun();
      const numberOfSweet16EntriesForTeam: number = this.sweet16EntryCountMap.get(team);
      return numberOfSweet16EntriesForTeam / numberOfSimulationRuns;
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
