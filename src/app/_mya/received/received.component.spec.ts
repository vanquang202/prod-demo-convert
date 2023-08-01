import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedComponent } from './received.component';

describe('ReceivedComponent', () => {
  let component: ReceivedComponent;
  let fixture: ComponentFixture<ReceivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceivedComponent]
    });
    fixture = TestBed.createComponent(ReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
