import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionManagerComponent } from './session-manager.component';

describe('SessionManagerComponent', () => {
  let component: SessionManagerComponent;
  let fixture: ComponentFixture<SessionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
