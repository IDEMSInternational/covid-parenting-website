import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInitiativeSupportParentsComponent } from './global-initiative-support-parents.component';

describe('GlobalInitiativeSupportParentsComponent', () => {
  let component: GlobalInitiativeSupportParentsComponent;
  let fixture: ComponentFixture<GlobalInitiativeSupportParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalInitiativeSupportParentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalInitiativeSupportParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
