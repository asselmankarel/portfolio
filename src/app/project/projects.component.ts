import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { IProject } from './IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProducts().subscribe({
      next: (projects) => {
        console.log(projects);
        this.projects = projects.sort((a, b) =>
          this.compare(a.language, b.language)
        );
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
}
