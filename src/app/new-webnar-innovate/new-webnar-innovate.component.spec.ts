import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWebnarInnovateComponent } from './new-webnar-innovate.component';

describe('NewWebnarInnovateComponent', () => {
  let component: NewWebnarInnovateComponent;
  let fixture: ComponentFixture<NewWebnarInnovateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWebnarInnovateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWebnarInnovateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
