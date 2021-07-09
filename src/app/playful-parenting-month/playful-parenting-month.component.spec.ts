import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayfulParentingMonthComponent } from './playful-parenting-month.component';

describe('PlayfulParentingMonthComponent', () => {
  let component: PlayfulParentingMonthComponent;
  let fixture: ComponentFixture<PlayfulParentingMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayfulParentingMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayfulParentingMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
