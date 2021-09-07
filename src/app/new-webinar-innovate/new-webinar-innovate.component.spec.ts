import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWebinarInnovateComponent } from './new-webinar-innovate.component';

describe('NewWebinarInnovateComponent', () => {
  let component: NewWebinarInnovateComponent;
  let fixture: ComponentFixture<NewWebinarInnovateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWebinarInnovateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWebinarInnovateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
