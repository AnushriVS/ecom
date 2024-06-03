import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenModal5Component } from './men-modal5.component';

describe('MenModal5Component', () => {
  let component: MenModal5Component;
  let fixture: ComponentFixture<MenModal5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenModal5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenModal5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
