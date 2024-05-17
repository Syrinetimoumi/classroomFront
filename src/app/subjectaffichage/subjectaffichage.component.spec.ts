import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectaffichageComponent } from './subjectaffichage.component';

describe('SubjectaffichageComponent', () => {
  let component: SubjectaffichageComponent;
  let fixture: ComponentFixture<SubjectaffichageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectaffichageComponent]
    });
    fixture = TestBed.createComponent(SubjectaffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
