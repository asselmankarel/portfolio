import { createAction } from '@ngrx/store';

export const loadProjects = createAction('[Project] Loading projects');
export const loadProjectsSuccess = createAction('[Project] load success');
export const loadProjectsFail = createAction('[Project] load failed');
