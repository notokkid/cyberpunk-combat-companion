import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNpcPageComponent } from './add-npc-page.component';

describe('AddNpcPageComponent', () => {
  let component: AddNpcPageComponent;
  let fixture: ComponentFixture<AddNpcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNpcPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNpcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
