export enum Theme {
  dark,
  light,
}

export interface State {
  app: {
    theme: Theme;
  };
}
