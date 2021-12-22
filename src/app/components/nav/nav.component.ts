import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faHome,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faProject = faProjectDiagram;

  constructor() {}

  ngOnInit(): void {}
}
