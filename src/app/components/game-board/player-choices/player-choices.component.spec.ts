import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerChoicesComponent } from './player-choices.component';

describe('PlayerChoicesComponent', () => {
  let component: PlayerChoicesComponent;
  let fixture: ComponentFixture<PlayerChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerChoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
