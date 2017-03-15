import { TestBed, inject } from '@angular/core/testing';

import { TournamentRunnerService } from './tournament-runner.service';

describe('TournamentRunnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentRunnerService]
    });
  });

  it('should ...', inject([TournamentRunnerService], (service: TournamentRunnerService) => {
    expect(service).toBeTruthy();
  }));
});
