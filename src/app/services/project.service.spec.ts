import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { IProject } from '../project/IProject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ProjectServiceService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    // httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return an array of github projects', (done: DoneFn) => {
    service.getGithubProjects().subscribe({
      next: (data) => {
        expect(data.length > 0).toBeTrue();
        done();
      },
      error: done.fail,
    });
  });
});
