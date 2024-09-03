import { TestBed } from '@angular/core/testing';

import { AdminTemplatesService } from './admin-templates.service';

describe('AdminTemplatesService', () => {
  let service: AdminTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
