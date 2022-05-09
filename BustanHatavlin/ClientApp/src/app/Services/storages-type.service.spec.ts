import { TestBed } from '@angular/core/testing';

import { StoragesTypeService } from './storages-type.service';

describe('StoragesTypeService', () => {
  let service: StoragesTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoragesTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
