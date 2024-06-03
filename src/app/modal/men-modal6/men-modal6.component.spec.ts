import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenModal6Component } from './men-modal6.component';

describe('MenModal6Component', () => {
  let component: MenModal6Component;
  let fixture: ComponentFixture<MenModal6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenModal6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenModal6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
