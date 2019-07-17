import { TestBed, async, inject } from '@angular/core/testing';

import { RulesGuard } from './rules.guard';

describe('RulesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RulesGuard]
    });
  });

  it('should ...', inject([RulesGuard], (guard: RulesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
