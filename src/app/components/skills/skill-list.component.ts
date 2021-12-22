import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
  skills: Skill[] = [
    { name: 'C#', level: 80 },
    { name: 'Entity', level: 70 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 75 },
    { name: 'RoR', level: 75 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
