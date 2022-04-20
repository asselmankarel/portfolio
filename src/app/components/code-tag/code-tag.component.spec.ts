import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTagComponent } from './code-tag.component';

describe('CodeTagComponent', () => {
  let component: CodeTagComponent;
  let fixture: ComponentFixture<CodeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
