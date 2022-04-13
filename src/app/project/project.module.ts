import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProjectsComponent }]),
  ],
  providers: [],
})
export class ProjectModule {}
