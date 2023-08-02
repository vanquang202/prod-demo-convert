import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryConvertComponent } from './history-convert.component';

describe('HistoryConvertComponent', () => {
  let component: HistoryConvertComponent;
  let fixture: ComponentFixture<HistoryConvertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryConvertComponent]
    });
    fixture = TestBed.createComponent(HistoryConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
