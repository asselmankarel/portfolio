import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { ProjectService } from '../services/project.service';
import { IProject } from './IProject';
import { getProjects, ProjectState, State } from './state/project.reducer';
import * as ProjectActions from './state/project.actions';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: IProject[] = [];
  loading = true;
  error: string | null = null;
  private sub: Subscription | null = null;

  constructor(
    private projectService: ProjectService,
    private toast: NgToastService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.sub = this.store
      .select(getProjects)
      .subscribe((projects) => (this.projects = projects));

    this.store.dispatch(ProjectActions.loadProjects());

    this.projectService.getGithubProjects().subscribe({
      next: (projects) => {
        this.projects = projects.sort((a, b) =>
          this.compare(a.language, b.language)
        );
        this.getLanguagesForProjects();
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.error = 'Error loading projects from Github Api...';
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  compare(a: string, b: string) {
    const nameA = a?.toLowerCase();
    const nameB = b?.toLowerCase();
    if (nameA < nameB) return -1;
    return 1;
  }

  getLanguagesForProjects() {
    if (this.projects?.length > 0) {
      this.projects.forEach((project) => {
        this.projectService.getProjectLanguages(project.name).subscribe({
          next: (languages) => {
            project.languages = languages;
          },
          error: (error) => {
            console.error(error);
          },
        });
      });
    }
  }

  getLanguagesForProject(project: IProject): string[] {
    return Object.keys(project.languages);
  }

  copyUrlToClipBoard(url: string) {
    navigator.clipboard.writeText(url);
    this.toast.info({
      detail: 'Url',
      summary: 'copied to clipboard',
      duration: 1200,
    });
  }
}
