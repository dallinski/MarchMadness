import {Injectable} from '@angular/core';
import {Team} from './team';

@Injectable()
export class AlgorithmService {
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
      'BIG12': 1,   'BIGE': 2,     'ACC': 3,     'SEC': 4,
      'PAC12': 5,   'BIG10': 6,    'AAC': 7,     'MVC': 8,
      'MWC': 9,     'MIDAM': 10,   'ATL10': 11,  'COL': 12,
      'WCC': 13,    'WAC': 14,     'USA': 15,    'SOUTH': 16,
      'SUMM': 17,   'MAAC': 18,    'BSKY': 19,   'OVC': 20,
      'BELT': 21,   'BIGW': 22,    'AEAST': 23,  'IVY': 24,
      'BSOU': 25,   'HORIZ': 26,   'PAT': 27,    'NEA': 28,
      'LAND': 29,   'ASUN': 30,    'MEAC': 31,   'SWAC': 32
    };

    const getValue = function(team: Team) {
      let val = 0;

      // positive attributes
      val += (team.field_goals_made / team.games_played) / 70;
      val += (team.reb_per_game / 45) / (20 * CONF_SOS[team.conf] * team.win_pct);
      val += (team.blocks_per_game / 5) / (20 * CONF_SOS[team.conf] * team.win_pct);
      val += (team.steals_per_game / 5) / (20 * CONF_SOS[team.conf] * team.win_pct);
      val += (team.field_goal_pct - 50) / 5;
      val += (team.free_throw_pct - 75) / 6;
      val += (team.three_point_pct - 40) / 6;
      val += 3.0 / Math.sqrt(team.rpi + 25);
      val += 2.0 / Math.sqrt(team.official_rank + 25);
      val += 0.5 / CONF_SOS[team.conf];
      val += team.reb_margin * 0.5;
      val += team.pts_margin * 0.2;
      val += (team.total_assists / team.turnovers) * 0.5;
      if (team.ppg > 70) {
        val += (team.ppg - 70) / 5;
      }

      // negative attributes
      val -= (team.turnovers_per_game / 10);
      val -= team.pfpg * 0.05;
      val -= (team.opp_3p_fg_per - 0.3) * 0.1;
      val -= (team.free_throws_made / team.field_goals_attempted) * 10;
      val -= (35 - team.def_reb) / team.games_played;
      val -= (team.opp_3p_fg_per * 5) / 100;
      if (team.opp_ppg > 70 && team.pts_margin < 2.0) {
        val -= (team.opp_ppg - 70) / 15;
      }

      return val;
    };

    let team1Value = getValue(team1);
    let team2Value = getValue(team2);

    let seedDiff = Math.abs(team1.seed - team2.seed);
    if (seedDiff === 0) {
      seedDiff = 0.5;
    }
    if (team1.seed === 12 && team2.seed === 5 ||
      team2.seed === 12 && team1.seed === 5) {
      seedDiff -= 5.0;
    }

    // the closer the seeds, the more randomness matters
    if (team1Value > team2Value) {
      team2Value += Math.random() * 9 / seedDiff;
    } else {
      team1Value += Math.random() * 9 / seedDiff;
    }

    if (team1Value > team2Value) {
      team1.winsGame();
    } else {
      team2.winsGame();
    }
  };

  public algorithm2019(game, team1: Team, team2: Team) {
    // updated to 2019 CONF_SOS stats
    const CONF_SOS = {
      'Big 12': 1,        'ACC': 2,         'Big Ten': 3,  'SEC': 4,
      'Big East': 5,      'AAC': 6,         'Pac-12': 7,   'WCC': 8,
      'MAC': 9,           'Ivy League': 10, 'SoCon': 11,   'Atlantic 10': 12,
      'C-USA': 13,        'MVC': 14,        'WAC': 15,     'MWC': 16,
      'Sun Belt': 17,     'COL': 18,        'Patriot': 19, 'OVC': 20,
      'ASUN': 21,         'Horizon': 22,    'Big Sky': 23, 'Big West': 24,
      'America East': 25, 'Big South': 26,  'SUMM': 27,    'NEC': 28,
      'MAAC': 29,         'Southland': 30,  'SWAC': 31,    'MEAC': 32
    };

    const getValue = function(team: Team) {
      let val = 0;

      // positive attributes
      val += (team.field_goals_made / team.games_played) / 70;
      val += (team.reb_per_game / 45) / (20 * CONF_SOS[team.conf] * team.win_pct);
      val += (team.blocks_per_game / 5) / (20 * CONF_SOS[team.conf] * team.win_pct);
      val += (team.steals_per_game / 5) / (20 * CONF_SOS[team.conf] * team.win_pct);
      val += (team.field_goal_pct - 50) / 5;
      val += (team.free_throw_pct - 75) / 6;
      val += (team.three_point_pct - 40) / 6;
      val += 3.0 / Math.sqrt(team.rpi + 25);
      val += 2.0 / Math.sqrt(team.official_rank + 25);
      val += 0.5 / CONF_SOS[team.conf];
      val += team.reb_margin * 0.5;
      val += team.pts_margin * 0.2;
      val += (team.total_assists / team.turnovers) * 0.5;
      if (team.ppg > 70) {
        val += (team.ppg - 70) / 15;
      }
      if (team.opp_ppg < 60) {
        val += (70 - team.opp_ppg) / 15;
      }

      // negative attributes
      val -= (team.turnovers_per_game / 10);
      val -= team.pfpg * 0.05;
      val -= (team.opp_3p_fg_per - 0.3) * 0.1;
      val -= (team.free_throws_made / team.field_goals_attempted) * 10;
      val -= (35 - team.def_reb) / team.games_played;
      val -= (team.opp_3p_fg_per * 5) / 100;
      if (team.opp_ppg > 70 && team.pts_margin < 5.0) {
        val -= (team.opp_ppg - 70) / 15;
      }

      return val;
    };

    let team1Value = getValue(team1);
    let team2Value = getValue(team2);

    let seedDiff = Math.abs(team1.seed - team2.seed);
    if (seedDiff === 0) {
      seedDiff = 0.5;
    }
    if (team1.seed === 12 && team2.seed === 5 ||
      team2.seed === 12 && team1.seed === 5) {
      seedDiff -= 5.0;
    }

    // the closer the seeds, the more randomness matters
    if (team1Value > team2Value) {
      team2Value += Math.random() * 30 / seedDiff;
    } else {
      team1Value += Math.random() * 30 / seedDiff;
    }

    if (team1Value > team2Value) {
      team1.winsGame();
    } else {
      team2.winsGame();
    }
  };

  public algorithm2021(game, team1: Team, team2: Team) {
    // updated to 2021 CONF_SOS stats
    const CONF_SOS = {
      'Big 12': 1,        'ACC': 7,         'Big Ten': 2,  'SEC': 3,
      'Big East': 6,      'AAC': 8,         'Pac-12': 5,   'WCC': 4,
      'MAC': 17,          'Ivy League': 10, 'SoCon': 9,    'Atlantic 10': 11,
      'C-USA': 14,        'MVC': 13,        'WAC': 28,     'Mountain West': 10,
      'Sun Belt': 16,     'CAA': 19,        'Patriot': 12, 'OVC': 22,
      'ASUN': 26,         'Horizon': 18,    'Big Sky': 24, 'Big West': 20,
      'America East': 25, 'Big South': 23,  'Summit League': 29,    'NEC': 21,
      'MAAC': 15,         'Southland': 30,  'SWAC': 27,    'MEAC': 31
    };

    const getConfSOS = function(team: Team) {
      let sos = CONF_SOS[team.conf];
      if (sos === 1) {
        sos += 0.5;
      }
      return sos;
    }

    const getValue = function(team: Team) {
      let val = 0;

      // positive attributes
      val += (team.field_goals_made / team.games_played) / 70;
      val += (team.reb_per_game / 45) / (40 * Math.log(getConfSOS(team)) * team.win_pct);
      val += (team.blocks_per_game / 5) / (20 * Math.log(getConfSOS(team)) * team.win_pct);
      val += (team.steals_per_game / 5) / (20 * Math.log(getConfSOS(team)) * team.win_pct);
      val += (team.field_goal_pct - 50) / 5;
      val += (team.free_throw_pct - 75) / 6;
      val += (team.three_point_pct - 40) / 2;
      val += 3.0 / Math.sqrt(team.rpi + 25);
      val += 2.0 / Math.sqrt(team.official_rank + 150);
      val += 0.5 / Math.log(getConfSOS(team));
      val += team.reb_margin * 0.5;
      val += team.pts_margin * 0.2;
      val += (team.total_assists / team.turnovers) * 0.6;
      if (team.ppg > 70) {
        val += (team.ppg - 70) / 50;
      }
      if (team.opp_ppg < 65) {
        val += (70 - team.opp_ppg) / 15;
        if (getConfSOS(team) < 10) {
          val += (70 - team.opp_ppg) / 5;
        }
      }
      val -= ((team.opp_fga / team.games_played) - 60) / 60;

      // negative attributes
      val -= (team.turnovers_per_game / 5);
      val -= team.pfpg * 0.05;
      val -= (team.opp_fg_per * 3) / 100;
      val -= (team.free_throws_made / team.field_goals_attempted) * 10;
      val -= (35 - team.def_reb) / team.games_played;
      val -= (team.opp_3p_fg_per * 5) / 100;
      if (team.opp_ppg > 70 && team.pts_margin < 5.0) {
        val -= (team.opp_ppg - 70) / 15;
      }
      if (getConfSOS(team) > 5) {
        val -= Math.log(getConfSOS(team));
      }

      // special case for Colgate. Make their score artificially lower
      if (team.name === 'Colgate') {
        val -= 6;
      }

      return val;
    };

    let team1Value = getValue(team1);
    let team2Value = getValue(team2);

    let seedDiff = Math.abs(team1.seed - team2.seed);
    if (team1.seed === 12 && team2.seed === 5 ||
      team2.seed === 12 && team1.seed === 5) {
      seedDiff -= 4.0;
    }

    // the closer the seeds, the more randomness matters
    if (seedDiff === 0) {
      team1Value += Math.random() * 4;
      team2Value += Math.random() * 4;
    } else {
      if (team1Value > team2Value) {
        team2Value += Math.random() * 45 / seedDiff;
      } else {
        team1Value += Math.random() * 45 / seedDiff;
      }
    }

    if (team1Value > team2Value) {
      team1.winsGame();
    } else {
      team2.winsGame();
    }
  };
}
