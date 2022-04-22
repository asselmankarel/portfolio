import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { IProject } from '../IProject';
import * as AppState from '../../state/app.state';
import * as ProjectActions from './project.actions';

export interface ProjectState {
  projects: IProject[];
}

export interface State extends AppState.State {
  projects: ProjectState;
}

const initialState: ProjectState = {
  projects: [],
};

const getProjectFeatureState = createFeatureSelector<ProjectState>('projects');

export const getProjects = createSelector(
  getProjectFeatureState,
  (state) => state.projects
);

export const projectReducer = createReducer<ProjectState>(
  initialState,
  on(ProjectActions.loadProjects, (state): ProjectState => {
    return { ...state };
  })
);
