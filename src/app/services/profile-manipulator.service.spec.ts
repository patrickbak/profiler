import { TestBed } from '@angular/core/testing';

import { ProfileManipulatorService } from './profile-manipulator.service';

describe('ProfileManipulatorService', () => {
  let service: ProfileManipulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileManipulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
