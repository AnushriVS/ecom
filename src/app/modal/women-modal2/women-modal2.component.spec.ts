import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenModal2Component } from './women-modal2.component';

describe('WomenModal2Component', () => {
  let component: WomenModal2Component;
  let fixture: ComponentFixture<WomenModal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenModal2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
