import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKitchenModal5Component } from './home-kitchen-modal5.component';

describe('HomeKitchenModal5Component', () => {
  let component: HomeKitchenModal5Component;
  let fixture: ComponentFixture<HomeKitchenModal5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeKitchenModal5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeKitchenModal5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
