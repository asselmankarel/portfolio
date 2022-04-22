import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input() name: string = '';
  @Input() level: number = 0;
  @Input() category: string = '';

  skillStyle = '';

  constructor() {}

  ngOnInit(): void {
    switch (this.category) {
      case 'Programming language':
        this.skillStyle = 'is-info';
        break;

      case 'JavaScript framework/library':
        this.skillStyle = 'is-primary';
        break;

      case 'Web':
        this.skillStyle = 'is-warning';
        break;
      case 'Database':
        this.skillStyle = 'is-danger';
        break;
      case 'Orm':
        this.skillStyle = 'is-link';
        break;

      default:
        this.skillStyle = '';
        break;
    }
  }
}
