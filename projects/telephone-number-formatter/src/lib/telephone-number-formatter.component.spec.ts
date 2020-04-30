import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneNumberFormatterComponent } from './telephone-number-formatter.component';

describe('TelephoneNumberFormatterComponent', () => {
  let component: TelephoneNumberFormatterComponent;
  let fixture: ComponentFixture<TelephoneNumberFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneNumberFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneNumberFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
