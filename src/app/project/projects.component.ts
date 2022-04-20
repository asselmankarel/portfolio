import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProjectService } from '../services/project.service';
import { IProject } from './IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];

  constructor(
    private projectService: ProjectService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.projectService.getGithubProjects().subscribe({
      next: (projects) => {
        this.projects = projects.sort((a, b) =>
          this.compare(a.language, b.language)
        );
        this.getLanguagesForProjects();
        console.log(this.projects);
      },
      error: (error) => {
        console.error(error);
      },
    });
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
