import { Injectable } from '@angular/core';
import { Team } from './team';

@Injectable()
export class TournamentRunnerService {
  private algorithm: any;
  private winners: Map<number, Team>;
  private simulationQueue: Array<Simulation>;

  constructor() {
    this.winners = new Map<number, Team>();
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

  simulateAll(): void {
    while (this.simulationQueue.length > 0) {
      this.simulateGame(this.simulationQueue.shift());
    }
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
