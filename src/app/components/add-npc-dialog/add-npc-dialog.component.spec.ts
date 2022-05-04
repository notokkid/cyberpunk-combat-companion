import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNpcDialogComponent } from './add-npc-dialog.component';

describe('AddNpcDialogComponent', () => {
  let component: AddNpcDialogComponent;
  let fixture: ComponentFixture<AddNpcDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNpcDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNpcDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
