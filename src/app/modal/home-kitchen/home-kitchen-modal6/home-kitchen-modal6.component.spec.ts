import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKitchenModal6Component } from './home-kitchen-modal6.component';

describe('HomeKitchenModal6Component', () => {
  let component: HomeKitchenModal6Component;
  let fixture: ComponentFixture<HomeKitchenModal6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeKitchenModal6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeKitchenModal6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
