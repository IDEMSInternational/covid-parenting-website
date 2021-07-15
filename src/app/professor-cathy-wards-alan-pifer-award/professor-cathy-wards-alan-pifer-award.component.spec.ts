import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCathyWardsAlanPiferAwardComponent } from './professor-cathy-wards-alan-pifer-award.component';

describe('ProfessorCathyWardsAlanPiferAwardComponent', () => {
  let component: ProfessorCathyWardsAlanPiferAwardComponent;
  let fixture: ComponentFixture<ProfessorCathyWardsAlanPiferAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorCathyWardsAlanPiferAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCathyWardsAlanPiferAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
