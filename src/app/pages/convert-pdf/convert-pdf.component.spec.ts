import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertPdfComponent } from './convert-pdf.component';

describe('ConvertPdfComponent', () => {
  let component: ConvertPdfComponent;
  let fixture: ComponentFixture<ConvertPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertPdfComponent]
    });
    fixture = TestBed.createComponent(ConvertPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
