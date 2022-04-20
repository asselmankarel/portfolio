import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-tag',
  templateUrl: './code-tag.component.html',
  styleUrls: ['./code-tag.component.scss'],
})
export class CodeTagComponent implements OnInit {
  @Input() language: string = '';

  styles = 'tag is-lowercase has-text-weight-semibold';

  constructor() {}

  ngOnInit(): void {
    this.language = this.language?.toLowerCase();
    this.setStyleForLanguage(this.language);
  }

  setStyleForLanguage(language: string) {
    let style = '';
    switch (language) {
      case 'html':
        style = 'is-info';
        break;
      case 'ruby':
        style = 'is-danger';
        break;
      case 'javascript':
        style = 'is-warning';
        this.language = 'js';
        break;
      case 'c#':
        style = 'is-success';
        break;
      case 'scss':
        style = 'is-link';
        break;
      default:
        style = 'is-primary';
        break;
    }
    this.styles = `${this.styles} ${style}`;
  }
}
