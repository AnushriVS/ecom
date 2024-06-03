import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsModal4Component } from './kids-modal4.component';

describe('KidsModal4Component', () => {
  let component: KidsModal4Component;
  let fixture: ComponentFixture<KidsModal4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidsModal4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsModal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
