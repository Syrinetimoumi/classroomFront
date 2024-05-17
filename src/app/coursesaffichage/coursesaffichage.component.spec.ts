import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesaffichageComponent } from './coursesaffichage.component';

describe('CoursesaffichageComponent', () => {
  let component: CoursesaffichageComponent;
  let fixture: ComponentFixture<CoursesaffichageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesaffichageComponent]
    });
    fixture = TestBed.createComponent(CoursesaffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
