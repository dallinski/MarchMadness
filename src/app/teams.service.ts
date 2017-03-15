import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Team } from './team';
import { Region, RegionName } from './region';

@Injectable()
export class TeamsService {
  midwest: Region;
  south: Region;
  east: Region;
  west: Region;

  constructor(http: Http) {
    this.midwest = new Region(RegionName.MIDWEST);
    this.south = new Region(RegionName.SOUTH);
    this.east = new Region(RegionName.EAST);
    this.west = new Region(RegionName.WEST);
    http.get('./assets/teams_2017.json').map((resp: Response) => resp.json()).subscribe(
      (teamsJson: any) => {
        this.importTeams(this.midwest, teamsJson.midwest);
        this.importTeams(this.south, teamsJson.south);
        this.importTeams(this.east, teamsJson.east);
        this.importTeams(this.west, teamsJson.west);
      }
    );
  }

  public getTeam(regionName: string, seed: number): Team {
    switch (regionName) {
      case 'midwest':
        return this.getRegion(RegionName.MIDWEST).getTeam(seed);
      case 'south':
        return this.getRegion(RegionName.SOUTH).getTeam(seed);
      case 'east':
        return this.getRegion(RegionName.EAST).getTeam(seed);
      case 'west':
        return this.getRegion(RegionName.WEST).getTeam(seed);
      default:
        throw new Error('Invalid region name: ' + regionName);
    }
  }

  public getRegion(regionName: RegionName): Region {
    switch (regionName) {
      case RegionName.MIDWEST:
        return this.midwest;
      case RegionName.SOUTH:
        return this.south;
      case RegionName.EAST:
        return this.east;
      case RegionName.WEST:
        return this.west;
      default:
        throw new Error('regionName error');
    }
  }

  private importTeams(region: Region, jsonTeams: Map<number, any>): void {
    for (let seed = 1; seed <= 16; seed++) {
      const team: Team = new Team(jsonTeams[seed].name);
      team.setValuesFromJson(jsonTeams[seed]);
      team.setSeed(seed);
      region.addTeam(seed, team);
    }
  }
}
