import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraffichageComponent } from './useraffichage.component';

describe('UseraffichageComponent', () => {
  let component: UseraffichageComponent;
  let fixture: ComponentFixture<UseraffichageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseraffichageComponent]
    });
    fixture = TestBed.createComponent(UseraffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
