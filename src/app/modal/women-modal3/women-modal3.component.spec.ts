import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenModal3Component } from './women-modal3.component';

describe('WomenModal3Component', () => {
  let component: WomenModal3Component;
  let fixture: ComponentFixture<WomenModal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenModal3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenModal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
