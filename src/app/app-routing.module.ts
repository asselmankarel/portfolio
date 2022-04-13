import { ProjectsComponent } from './project/projects.component';
import { SkillListComponent } from './components/skills/skill-list.component';
// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { E404Component } from './components/shared/e404/e404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillListComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule),
  },

  { path: '**', component: E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
