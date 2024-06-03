import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenModal4Component } from './women-modal4.component';

describe('WomenModal4Component', () => {
  let component: WomenModal4Component;
  let fixture: ComponentFixture<WomenModal4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenModal4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenModal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
