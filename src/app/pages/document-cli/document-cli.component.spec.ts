import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCliComponent } from './document-cli.component';

describe('DocumentCliComponent', () => {
  let component: DocumentCliComponent;
  let fixture: ComponentFixture<DocumentCliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentCliComponent]
    });
    fixture = TestBed.createComponent(DocumentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
