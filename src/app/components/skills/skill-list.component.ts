import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
  categories: string[] = [];

  skills: Skill[] = [
    { category: 'Programming language', name: 'C#', level: 75 },
    { category: 'Programming language', name: 'JavaScript', level: 70 },
    // { category: 'Programming language', name: 'Ruby', level: 70 },

    { category: 'JavaScript framework/library', name: 'Angular', level: 73 },
    { category: 'JavaScript framework/library', name: 'React', level: 71 },

    // { category: 'Mvc framework', name: 'Ruby on Rails', level: 65 },
    { category: 'Web framework', name: 'ASP.NET Core', level: 70 },

    { category: 'Orm', name: 'Entity framework core', level: 72 },
    // { category: 'Orm', name: 'Active records', level: 65 },

    { category: 'Database', name: 'MsSql server', level: 65 },
    { category: 'Database', name: 'MongoDb', level: 55 },

    { category: 'Web', name: 'html', level: 74 },
    { category: 'Web', name: 'css', level: 72 },
    { category: 'Web', name: 'scss', level: 68 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getUniqueCatagories();
  }

  getUniqueCatagories() {
    this.skills.map((skill) => {
      if (!this.categories.includes(skill.category)) {
        this.categories.push(skill.category);
      }
    });
  }
}
