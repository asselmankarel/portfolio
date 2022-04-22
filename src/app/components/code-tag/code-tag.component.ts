import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-tag',
  templateUrl: './code-tag.component.html',
  styleUrls: ['./code-tag.component.scss'],
})
export class CodeTagComponent implements OnInit {
  @Input() language: string = '';
  tagStyle: string = '';

  constructor() {}

  ngOnInit(): void {
    this.language = this.language?.toLowerCase();
    this.setStyleForLanguage(this.language);
  }

  setStyleForLanguage(language: string) {
    switch (language) {
      case 'html':
        this.tagStyle = 'is-info is-light';
        break;
      case 'ruby':
        this.tagStyle = 'is-danger';
        break;
      case 'javascript':
        this.tagStyle = 'is-warning';
        this.language = 'js';
        break;
      case 'typescript':
        this.tagStyle = 'is-info';
        this.language = 'ts';
        break;
      case 'c#':
        this.tagStyle = 'is-success';
        break;
      case 'scss':
        this.tagStyle = 'is-link';
        break;
      default:
        this.tagStyle = 'is-primary';
        break;
    }
  }
}
