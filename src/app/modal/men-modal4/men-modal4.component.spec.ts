import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenModal4Component } from './men-modal4.component';

describe('MenModal4Component', () => {
  let component: MenModal4Component;
  let fixture: ComponentFixture<MenModal4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenModal4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenModal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
