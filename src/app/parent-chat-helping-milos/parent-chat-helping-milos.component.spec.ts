import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChatHelpingMilosComponent } from './parent-chat-helping-milos.component';

describe('ParentChatHelpingMilosComponent', () => {
  let component: ParentChatHelpingMilosComponent;
  let fixture: ComponentFixture<ParentChatHelpingMilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChatHelpingMilosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChatHelpingMilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
