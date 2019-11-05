import { TestBed } from '@angular/core/testing';

import { GithubHttpService } from './github-http.service';

describe('GithubHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubHttpService = TestBed.get(GithubHttpService);
    expect(service).toBeTruthy();
  });
});
