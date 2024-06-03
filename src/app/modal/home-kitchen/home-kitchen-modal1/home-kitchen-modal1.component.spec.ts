import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKitchenModal1Component } from './home-kitchen-modal1.component';

describe('HomeKitchenModal1Component', () => {
  let component: HomeKitchenModal1Component;
  let fixture: ComponentFixture<HomeKitchenModal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeKitchenModal1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeKitchenModal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
