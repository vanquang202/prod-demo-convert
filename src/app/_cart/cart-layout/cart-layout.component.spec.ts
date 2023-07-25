import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLayoutComponent } from './cart-layout.component';

describe('CartLayoutComponent', () => {
  let component: CartLayoutComponent;
  let fixture: ComponentFixture<CartLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartLayoutComponent]
    });
    fixture = TestBed.createComponent(CartLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
