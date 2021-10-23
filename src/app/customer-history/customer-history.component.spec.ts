import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHistoryComponent } from './customer-history.component';

describe('CustomerMainComponent', () => {
  let component: CustomerHistoryComponent;
  let fixture: ComponentFixture<CustomerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
