import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcAttackDialogComponent } from './npc-attack-dialog.component';

describe('NpcAttackDialogComponent', () => {
  let component: NpcAttackDialogComponent;
  let fixture: ComponentFixture<NpcAttackDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcAttackDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcAttackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
