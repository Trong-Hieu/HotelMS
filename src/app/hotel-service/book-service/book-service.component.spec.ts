import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookServiceComponent } from './book-service.component';

describe('BookServiceComponent', () => {
  let component: BookServiceComponent;
  let fixture: ComponentFixture<BookServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
