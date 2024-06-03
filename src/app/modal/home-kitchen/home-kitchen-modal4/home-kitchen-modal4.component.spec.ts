import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKitchenModal4Component } from './home-kitchen-modal4.component';

describe('HomeKitchenModal4Component', () => {
  let component: HomeKitchenModal4Component;
  let fixture: ComponentFixture<HomeKitchenModal4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeKitchenModal4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeKitchenModal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
