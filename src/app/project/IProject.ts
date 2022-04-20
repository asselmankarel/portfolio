export interface IProject {
  name: string;
  language: string;
  clone_url: string;
  html_url: string; // linkt to see repo on github
  languages: IProjectLanguages;
}

export interface IProjectLanguages {
  [key: string]: number;
}

//demo: 'https://asselmankarel.github.io/{name}/'
