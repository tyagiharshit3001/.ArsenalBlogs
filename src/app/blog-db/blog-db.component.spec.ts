import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDbComponent } from './blog-db.component';

describe('BlogDbComponent', () => {
  let component: BlogDbComponent;
  let fixture: ComponentFixture<BlogDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDbComponent]
    });
    fixture = TestBed.createComponent(BlogDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
