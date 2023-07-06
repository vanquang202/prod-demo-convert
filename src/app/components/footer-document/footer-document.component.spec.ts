import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDocumentComponent } from './footer-document.component';

describe('FooterDocumentComponent', () => {
  let component: FooterDocumentComponent;
  let fixture: ComponentFixture<FooterDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterDocumentComponent]
    });
    fixture = TestBed.createComponent(FooterDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
