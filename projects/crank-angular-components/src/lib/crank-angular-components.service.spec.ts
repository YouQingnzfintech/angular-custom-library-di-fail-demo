import { TestBed } from '@angular/core/testing';

import { CrankAngularComponentsService } from './crank-angular-components.service';

describe('CrankAngularComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrankAngularComponentsService = TestBed.get(CrankAngularComponentsService);
    expect(service).toBeTruthy();
  });
});
