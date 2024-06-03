import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKitchenModal3Component } from './home-kitchen-modal3.component';

describe('HomeKitchenModal3Component', () => {
  let component: HomeKitchenModal3Component;
  let fixture: ComponentFixture<HomeKitchenModal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeKitchenModal3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeKitchenModal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
