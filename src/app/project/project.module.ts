import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CodeTagComponent } from '../components/code-tag/code-tag.component';

@NgModule({
  declarations: [ProjectsComponent, CodeTagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProjectsComponent }]),
  ],
  providers: [],
})
export class ProjectModule {}
