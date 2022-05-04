import { TestBed } from '@angular/core/testing';

import { CombatRepositoryService } from './combat-repository.service';

describe('CombatRepositoryService', () => {
  let service: CombatRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
