import {Team} from './team';

export class Region {
  name: RegionName;
  teams: Map<number, Team>;

  constructor(name: RegionName) {
    this.name = name;
    this.teams = new Map<number, Team>();
  }

  getTeam(seed: number): Team {
    return this.teams.get(seed);
  }

  addTeam(seed: number, team: Team): void {
    if (seed < 1 || seed > 16) {
      throw new Error('Invalid seed number');
    }
    this.teams.set(seed, team);
  }
}

export enum RegionName {
  MIDWEST,
  SOUTH,
  EAST,
  WEST
}
