import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SospisdewComponent } from './sospisdew.component';

describe('SospisdewComponent', () => {
  let component: SospisdewComponent;
  let fixture: ComponentFixture<SospisdewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SospisdewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SospisdewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
