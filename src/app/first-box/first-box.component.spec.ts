import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBoxComponent } from './first-box.component';

describe('FirstBoxComponent', () => {
  let component: FirstBoxComponent;
  let fixture: ComponentFixture<FirstBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstBoxComponent]
    });
    fixture = TestBed.createComponent(FirstBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
