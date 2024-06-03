import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsModal1Component } from './kids-modal1.component';

describe('KidsModal1Component', () => {
  let component: KidsModal1Component;
  let fixture: ComponentFixture<KidsModal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidsModal1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsModal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
