import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStudyByCDCAndUniversityOfOxfordComponent } from './global-study-by-cdc-and-university-of-oxford.component';

describe('GlobalStudyByCDCAndUniversityOfOxfordComponent', () => {
  let component: GlobalStudyByCDCAndUniversityOfOxfordComponent;
  let fixture: ComponentFixture<GlobalStudyByCDCAndUniversityOfOxfordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalStudyByCDCAndUniversityOfOxfordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalStudyByCDCAndUniversityOfOxfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
