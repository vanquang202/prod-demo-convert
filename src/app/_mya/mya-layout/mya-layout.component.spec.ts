import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaLayoutComponent } from './mya-layout.component';

describe('MyaLayoutComponent', () => {
  let component: MyaLayoutComponent;
  let fixture: ComponentFixture<MyaLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyaLayoutComponent]
    });
    fixture = TestBed.createComponent(MyaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
