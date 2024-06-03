import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenModal3Component } from './men-modal3.component';

describe('MenModal3Component', () => {
  let component: MenModal3Component;
  let fixture: ComponentFixture<MenModal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenModal3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenModal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
