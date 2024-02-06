import { TestBed } from '@angular/core/testing';

import { PinInputService } from './pin-input.service';

describe('PinInputService', () => {
  let service: PinInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
