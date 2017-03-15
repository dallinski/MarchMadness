export class Team {
  name: string;
  conf: string;
  seed: number;
  games_played: number;
  rpi: number;
  official_rank: number;
  wins: number;
  losses: number;
  win_pct: number;
  field_goals_made: number;
  field_goals_attempted: number;
  field_goal_pct: number;
  free_throws_made: number;
  free_throws_attempted: number;
  free_throw_pct: number;
  threes_made: number;
  threes_attempted: number;
  three_point_pct: number;
  total_reb: number;
  off_reb: number;
  def_reb: number;
  reb_per_game: number;
  total_steals: number;
  steals_per_game: number;
  total_blocks: number;
  blocks_per_game: number;
  total_assists: number;
  assists_per_game: number;
  turnovers: number;
  turnovers_per_game: number;

  winsGame: any;

  constructor(name: string) {
    this.name = name;
  }

  setValuesFromJson(json: any): void {
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        this[key] = json[key];
      }
    }
    if (!!this.win_pct) {
      this.win_pct = this.win_pct / 100;
    }
  }

  setSeed(seed: number): void {
    this.seed = seed;
  }
}
