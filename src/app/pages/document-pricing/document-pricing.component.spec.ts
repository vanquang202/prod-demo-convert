import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPricingComponent } from './document-pricing.component';

describe('DocumentPricingComponent', () => {
  let component: DocumentPricingComponent;
  let fixture: ComponentFixture<DocumentPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentPricingComponent]
    });
    fixture = TestBed.createComponent(DocumentPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
