import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { CodeTagComponent } from '../components/code-tag/code-tag.component';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from './state/project.reducer';

@NgModule({
  declarations: [ProjectsComponent, CodeTagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProjectsComponent }]),
    StoreModule.forFeature('projects', projectReducer),
  ],
  providers: [],
})
export class ProjectModule {}
