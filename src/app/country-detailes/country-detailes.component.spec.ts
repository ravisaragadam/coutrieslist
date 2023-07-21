import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailesComponent } from './country-detailes.component';

describe('CountryDetailesComponent', () => {
  let component: CountryDetailesComponent;
  let fixture: ComponentFixture<CountryDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailesComponent]
    });
    fixture = TestBed.createComponent(CountryDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
