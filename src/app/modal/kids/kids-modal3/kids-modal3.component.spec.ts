import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsModal3Component } from './kids-modal3.component';

describe('KidsModal3Component', () => {
  let component: KidsModal3Component;
  let fixture: ComponentFixture<KidsModal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidsModal3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsModal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
