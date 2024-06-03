import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenModal1Component } from './women-modal1.component';

describe('WomenModal1Component', () => {
  let component: WomenModal1Component;
  let fixture: ComponentFixture<WomenModal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenModal1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenModal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
