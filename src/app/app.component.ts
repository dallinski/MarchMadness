import {Component, OnInit} from '@angular/core';
import {Team} from './team';
import {TeamsService} from './teams.service';
import {TournamentRunnerService} from './tournament-runner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public algorithmToTest: (game: any, team1: Team, team2: Team) => void;

  private tournamentRunner: TournamentRunnerService;
  private teamsService: TeamsService;

  public algorithm2017(game, team1: Team, team2: Team) {
    // updated to 2017 CONF_SOS stats
    const CONF_SOS = {
      'ACC': 1,
      'BIG12': 2,
      'BIGE': 3,
      'BIG10': 4,
      'SEC': 5,
      'PAC12': 6,
      'AAC': 7,
      'ATL10': 8,
      'WCC': 9,
      'MWC': 10,
      'COL': 11,
      'MVC': 12,
      'BELT': 13,
      'MIDAM': 14,
      'SOUTH': 15,
      'MAAC': 16,
      'HORIZ': 17,
      'SUMM': 18,
      'WAC': 19,
      'IVY': 20,
      'AEAST': 21,
      'PAT': 22,
      'USA': 23,
      'OVC': 24,
      'BSOU': 25,
      'ASUN': 26,
      'LAND': 27,
      'BSKY': 28,
      'BIGW': 29,
      'NEA': 30,
      'SWAC': 31,
      'MEAC': 32
    };

    const getValue = function(team: Team) {
      let val = 0;
      val -= CONF_SOS[team.conf] / 4.5;

      val += (team.field_goals_made / team.games_played) / 70;

      if (team.field_goal_pct > 50) {
        val += (team.field_goal_pct - 50) / 5;
      }
      if (team.free_throw_pct > 75) {
        val += (team.free_throw_pct - 75) / 6;
      }
      if (team.three_point_pct > 40) {
        val += (team.three_point_pct - 40) / 6;
      }

      val += (team.reb_per_game / 45 + team.blocks_per_game / 5 + team.steals_per_game / 5) / (20 * CONF_SOS[team.conf] * team.win_pct);

      val -= (team.turnovers_per_game / 10);

      val -= team.rpi / 100;

      val += 5.5 / Math.sqrt(team.official_rank + 25);

      if (team.name === 'Wake Forest') {
        val -= 1.0;
      }

      return val;
    };

    let team1Value = getValue(team1);
    let team2Value = getValue(team2);

    let seedDiff = Math.abs(team1.seed - team2.seed);
    if (seedDiff === 0) {
      seedDiff = 0.5;
    }
    if (team1.seed === 12 && team2.seed === 5 || team2.seed === 12 && team1.seed === 5) {
      seedDiff -= 5.0;
    }
    // the closer the seeds, the more randomness matters
    if (team1Value > team2Value) {
      team2Value += Math.random() * 8 / seedDiff;
    } else {
      team1Value += Math.random() * 8 / seedDiff;
    }

    if (team1Value > team2Value) {
      team1.winsGame();
    } else {
      team2.winsGame();
    }
  };

  public algorithm2018(game, team1: Team, team2: Team) {
    // updated to 2018 CONF_SOS stats
    const CONF_SOS = {
      'BIG12': 1,
      'BIGE': 2,
      'ACC': 3,
      'SEC': 4,
      'PAC12': 5,
      'BIG10': 6,
      'AAC': 7,
      'MVC': 8,
      'MWC': 9,
      'MIDAM': 10,
      'ATL10': 11,
      'COL': 12,
      'WCC': 13,
      'WAC': 14,
      'USA': 15,
      'SOUTH': 16,
      'SUMM': 17,
      'MAAC': 18,
      'BSKY': 19,
      'OVC': 20,
      'BELT': 21,
      'BIGW': 22,
      'AEAST': 23,
      'IVY': 24,
      'BSOU': 25,
      'HORIZ': 26,
      'PAT': 27,
      'NEA': 28,
      'LAND': 29,
      'ASUN': 30,
      'MEAC': 31,
      'SWAC': 32
    };

    const getValue = function(team: Team) {
      let val = 0;
      val -= CONF_SOS[team.conf] / 4.5;

      val += (team.field_goals_made / team.games_played) / 70;

      if (team.field_goal_pct > 50) {
        val += (team.field_goal_pct - 50) / 5;
      }
      if (team.free_throw_pct > 75) {
        val += (team.free_throw_pct - 75) / 6;
      }
      if (team.three_point_pct > 40) {
        val += (team.three_point_pct - 40) / 6;
      }

      val += (team.reb_per_game / 45 + team.blocks_per_game / 5 + team.steals_per_game / 5) / (20 * CONF_SOS[team.conf] * team.win_pct);

      val -= (team.turnovers_per_game / 10);

      val -= team.rpi / 100;

      val += 5.5 / Math.sqrt(team.official_rank + 25);

      return val;
    };

    let team1Value = getValue(team1);
    let team2Value = getValue(team2);

    let seedDiff = Math.abs(team1.seed - team2.seed);
    if (seedDiff === 0) {
      seedDiff = 0.5;
    }
    if (team1.seed === 12 && team2.seed === 5 || team2.seed === 12 && team1.seed === 5) {
      seedDiff -= 5.0;
    }

    console.log(team1.name + ': ' + team1Value);
    console.log(team2.name + ': ' + team2Value);

    // the closer the seeds, the more randomness matters
    if (team1Value > team2Value) {
      team2Value += Math.random() * 8 / seedDiff;
    } else {
      team1Value += Math.random() * 8 / seedDiff;
    }

    if (team1Value > team2Value) {
      team1.winsGame();
    } else {
      team2.winsGame();
    }
  };

  constructor(tournamentRunner: TournamentRunnerService, teamsService: TeamsService) {
    this.tournamentRunner = tournamentRunner;
    this.teamsService = teamsService;
  }

  ngOnInit() {
    this.algorithmToTest = this.algorithm2018;
    this.tournamentRunner.setAlgorithm(this.algorithmToTest);
    this.teamsService.setTeamsJson('./assets/teams_2018.json');
  }

}
