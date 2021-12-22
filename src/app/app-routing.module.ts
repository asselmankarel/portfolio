import { ProjectsComponent } from './components/projects/projects.component';
import { SkillListComponent } from './components/skills/skill-list.component';
// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'projects', component: ProjectsComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
