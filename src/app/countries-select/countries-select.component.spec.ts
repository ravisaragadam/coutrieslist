import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSelectComponent } from './countries-select.component';

describe('CountriesSelectComponent', () => {
  let component: CountriesSelectComponent;
  let fixture: ComponentFixture<CountriesSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesSelectComponent]
    });
    fixture = TestBed.createComponent(CountriesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
