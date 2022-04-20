import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SkillComponent } from './components/skills/skill.component';
import { SkillListComponent } from './components/skills/skill-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { StoreModule } from '@ngrx/store';
import { ProjectModule } from './project/project.module';
import { E404Component } from './components/shared/e404/e404.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SkillComponent,
    SkillListComponent,
    HeaderComponent,
    E404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
    ProjectModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
