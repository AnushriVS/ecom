import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsModal2Component } from './kids-modal2.component';

describe('KidsModal2Component', () => {
  let component: KidsModal2Component;
  let fixture: ComponentFixture<KidsModal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidsModal2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
