import {TeamsService} from '../teams.service';
import {TournamentRunnerService} from '../tournament-runner.service';

export class Round {
  protected teamsService: TeamsService;
  protected tournamentRunner: TournamentRunnerService;

  constructor(teamsService: TeamsService, tournamentRunner: TournamentRunnerService) {
    this.teamsService = teamsService;
    this.tournamentRunner = tournamentRunner;
  }
}
