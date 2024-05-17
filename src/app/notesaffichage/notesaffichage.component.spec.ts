import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesaffichageComponent } from './notesaffichage.component';

describe('NotesaffichageComponent', () => {
  let component: NotesaffichageComponent;
  let fixture: ComponentFixture<NotesaffichageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesaffichageComponent]
    });
    fixture = TestBed.createComponent(NotesaffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
