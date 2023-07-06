import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangChuComponent } from './trang-chu.component';

describe('TrangChuComponent', () => {
  let component: TrangChuComponent;
  let fixture: ComponentFixture<TrangChuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrangChuComponent]
    });
    fixture = TestBed.createComponent(TrangChuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
