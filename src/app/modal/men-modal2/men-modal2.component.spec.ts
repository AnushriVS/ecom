import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenModal2Component } from './men-modal2.component';

describe('MenModal2Component', () => {
  let component: MenModal2Component;
  let fixture: ComponentFixture<MenModal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenModal2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
