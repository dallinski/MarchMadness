import { Injectable } from '@angular/core';
import { Team } from './team';
import {TeamsService} from './teams.service';

@Injectable()
export class TournamentRunnerService {
  public overallWinnerCount: Map<string, number>;

  protected teamsService: TeamsService;

  private algorithm: any;
  private winners: Map<number, Team>;
  private simulationQueue: Array<Simulation>;

  constructor(teamsService: TeamsService) {
    this.teamsService = teamsService;
    this.winners = new Map<number, Team>();
    this.overallWinnerCount = new Map<string, number>();
    this.simulationQueue = [];
  }

  setAlgorithm(algorithm: any): void {
    this.algorithm = algorithm;
  }

  simulateGame(sim: Simulation): void {
    sim.teamA.winsGame = () => {
      this.winners.set(sim.game, sim.teamA);
    };
    sim.teamB.winsGame = () => {
      this.winners.set(sim.game, sim.teamB);
    };
    this.algorithm({round: sim.round}, sim.teamA, sim.teamB);
  }

  simulateGamesInQueue(): void {
    while (this.simulationQueue.length > 0) {
      this.simulateGame(this.simulationQueue.shift());
    }
  }

  simulateAllRounds(): void {
    this.simulateRound1();
    this.simulateRound2();
    this.simulateRound3();
    this.simulateRound4();
    this.simulateRound5();
    this.simulateRound6();
  }

  getWinner(game: number): Team {
    if (this.winners.has(game)) {
      return this.winners.get(game);
    }
    return null;
  }

  queueSimulation(game: number, round: number, teamA: Team, teamB: Team): void {
    this.simulationQueue.push(new Simulation(game, round, teamA, teamB));
  }

  simulateRound1(): void {
    this.queueSimulation(18, 5, this.teamsService.getTeam('midwest', 1), this.teamsService.getTeam('midwest', 16));
    this.queueSimulation(25, 5, this.teamsService.getTeam('midwest', 2), this.teamsService.getTeam('midwest', 15));
    this.queueSimulation(23, 5, this.teamsService.getTeam('midwest', 3), this.teamsService.getTeam('midwest', 14));
    this.queueSimulation(21, 5, this.teamsService.getTeam('midwest', 4), this.teamsService.getTeam('midwest', 13));
    this.queueSimulation(20, 5, this.teamsService.getTeam('midwest', 5), this.teamsService.getTeam('midwest', 12));
    this.queueSimulation(22, 5, this.teamsService.getTeam('midwest', 6), this.teamsService.getTeam('midwest', 11));
    this.queueSimulation(24, 5, this.teamsService.getTeam('midwest', 7), this.teamsService.getTeam('midwest', 10));
    this.queueSimulation(19, 5, this.teamsService.getTeam('midwest', 8), this.teamsService.getTeam('midwest', 9));

    this.queueSimulation(26, 5, this.teamsService.getTeam('west', 1), this.teamsService.getTeam('west', 16));
    this.queueSimulation(33, 5, this.teamsService.getTeam('west', 2), this.teamsService.getTeam('west', 15));
    this.queueSimulation(31, 5, this.teamsService.getTeam('west', 3), this.teamsService.getTeam('west', 14));
    this.queueSimulation(29, 5, this.teamsService.getTeam('west', 4), this.teamsService.getTeam('west', 13));
    this.queueSimulation(28, 5, this.teamsService.getTeam('west', 5), this.teamsService.getTeam('west', 12));
    this.queueSimulation(30, 5, this.teamsService.getTeam('west', 6), this.teamsService.getTeam('west', 11));
    this.queueSimulation(32, 5, this.teamsService.getTeam('west', 7), this.teamsService.getTeam('west', 10));
    this.queueSimulation(27, 5, this.teamsService.getTeam('west', 8), this.teamsService.getTeam('west', 9));

    this.queueSimulation(65, 5, this.teamsService.getTeam('east', 1), this.teamsService.getTeam('east', 16));
    this.queueSimulation(9, 5, this.teamsService.getTeam('east', 2), this.teamsService.getTeam('east', 15));
    this.queueSimulation(7, 5, this.teamsService.getTeam('east', 3), this.teamsService.getTeam('east', 14));
    this.queueSimulation(5, 5, this.teamsService.getTeam('east', 4), this.teamsService.getTeam('east', 13));
    this.queueSimulation(4, 5, this.teamsService.getTeam('east', 5), this.teamsService.getTeam('east', 12));
    this.queueSimulation(6, 5, this.teamsService.getTeam('east', 6), this.teamsService.getTeam('east', 11));
    this.queueSimulation(8, 5, this.teamsService.getTeam('east', 7), this.teamsService.getTeam('east', 10));
    this.queueSimulation(66, 5, this.teamsService.getTeam('east', 8), this.teamsService.getTeam('east', 9));

    this.queueSimulation(10, 5, this.teamsService.getTeam('south', 1), this.teamsService.getTeam('south', 16));
    this.queueSimulation(17, 5, this.teamsService.getTeam('south', 2), this.teamsService.getTeam('south', 15));
    this.queueSimulation(15, 5, this.teamsService.getTeam('south', 3), this.teamsService.getTeam('south', 14));
    this.queueSimulation(13, 5, this.teamsService.getTeam('south', 4), this.teamsService.getTeam('south', 13));
    this.queueSimulation(12, 5, this.teamsService.getTeam('south', 5), this.teamsService.getTeam('south', 12));
    this.queueSimulation(14, 5, this.teamsService.getTeam('south', 6), this.teamsService.getTeam('south', 11));
    this.queueSimulation(16, 5, this.teamsService.getTeam('south', 7), this.teamsService.getTeam('south', 10));
    this.queueSimulation(11, 5, this.teamsService.getTeam('south', 8), this.teamsService.getTeam('south', 9));

    this.simulateGamesInQueue();
  }

  simulateRound2(): void {
    this.queueSimulation(41, 4, this.getWinner(18), this.getWinner(19));
    this.queueSimulation(42, 4, this.getWinner(20), this.getWinner(21));
    this.queueSimulation(43, 4, this.getWinner(22), this.getWinner(23));
    this.queueSimulation(44, 4, this.getWinner(24), this.getWinner(25));

    this.queueSimulation(45, 4, this.getWinner(26), this.getWinner(27));
    this.queueSimulation(46, 4, this.getWinner(28), this.getWinner(29));
    this.queueSimulation(47, 4, this.getWinner(30), this.getWinner(31));
    this.queueSimulation(48, 4, this.getWinner(32), this.getWinner(33));

    this.queueSimulation(3, 4, this.getWinner(65), this.getWinner(66));
    this.queueSimulation(34, 4, this.getWinner(4), this.getWinner(5));
    this.queueSimulation(35, 4, this.getWinner(6), this.getWinner(7));
    this.queueSimulation(36, 4, this.getWinner(8), this.getWinner(9));

    this.queueSimulation(37, 4, this.getWinner(10), this.getWinner(11));
    this.queueSimulation(38, 4, this.getWinner(12), this.getWinner(13));
    this.queueSimulation(39, 4, this.getWinner(14), this.getWinner(15));
    this.queueSimulation(40, 4, this.getWinner(16), this.getWinner(17));

    this.simulateGamesInQueue();
  }

  simulateRound3(): void {
    this.queueSimulation(53, 3, this.getWinner(41), this.getWinner(42));
    this.queueSimulation(54, 3, this.getWinner(43), this.getWinner(44));

    this.queueSimulation(55, 3, this.getWinner(45), this.getWinner(46));
    this.queueSimulation(56, 3, this.getWinner(47), this.getWinner(48));

    this.queueSimulation(49, 3, this.getWinner(3), this.getWinner(34));
    this.queueSimulation(50, 3, this.getWinner(35), this.getWinner(36));

    this.queueSimulation(51, 3, this.getWinner(37), this.getWinner(38));
    this.queueSimulation(52, 3, this.getWinner(39), this.getWinner(40));

    this.simulateGamesInQueue();
  }

  simulateRound4(): void {
    this.queueSimulation(60, 2, this.getWinner(53), this.getWinner(54));
    this.queueSimulation(61, 2, this.getWinner(55), this.getWinner(56));
    this.queueSimulation(58, 2, this.getWinner(49), this.getWinner(50));
    this.queueSimulation(59, 2, this.getWinner(51), this.getWinner(52));

    this.simulateGamesInQueue();
  }

  simulateRound5(): void {
    this.queueSimulation(63, 1, this.getWinner(58), this.getWinner(61));
    this.queueSimulation(62, 1, this.getWinner(60), this.getWinner(59));
    this.simulateGamesInQueue();
  }

  simulateRound6(): void {
    this.queueSimulation(64, 0, this.getWinner(62), this.getWinner(63));
    this.simulateGamesInQueue();

    this.incrementWinnerCount(this.getWinner(64));
  }

  incrementWinnerCount(winner: Team) {
    const currentWinnersTotalWinCount: number = this.overallWinnerCount.get(winner.name);
    if (currentWinnersTotalWinCount) {
      this.overallWinnerCount.set(winner.name, currentWinnersTotalWinCount + 1);
    } else {
      this.overallWinnerCount.set(winner.name, 1);
    }
  }
}

export class Simulation {
  game: number;
  round: number; // Value ranges from 0 to 5 where 5 is the first round and 0 is the championship.
  teamA: Team;
  teamB: Team;

  constructor(game: number, round: number, teamA: Team, teamB: Team) {
    this.game = game;
    this.round = round;
    this.teamA = teamA;
    this.teamB = teamB;
  }
}
