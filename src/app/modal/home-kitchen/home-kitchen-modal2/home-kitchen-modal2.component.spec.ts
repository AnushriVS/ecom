import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKitchenModal2Component } from './home-kitchen-modal2.component';

describe('HomeKitchenModal2Component', () => {
  let component: HomeKitchenModal2Component;
  let fixture: ComponentFixture<HomeKitchenModal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeKitchenModal2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeKitchenModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
