import { Component } from '@angular/core';
import { Region } from '../models/region';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import * as fromCountries from '../app-store/reducers';
import { CountriesActions, CountryActions } from '../app-store/actions';
import { Country } from '../models/country';

@Component({
  selector: 'app-regions-container',
  templateUrl: './regions-container.component.html',
  styleUrls: ['./regions-container.component.css'],
})
export class RegionsContainerComponent {
  regions$: Observable<Region[]>;
  countries$!: Observable<Country[]>;
  currentCountry$!: Observable<Country>;
  currentOption: string = '';

  constructor(private store: Store) {
    this.regions$ = store.select(fromCountries.selectRegions);
  }
  getCurrentOption(option: string) {
    if (option !== 'Asia' && option !== 'Europe' && option !== '') {
      this.getCountryDetails(option);
    } else {
      this.getAllCountries(option);
    }
    this.currentOption = option;
  }

  getAllCountries(region: string) {
    this.store.dispatch(CountriesActions.getCountries({ region }));
    this.countries$ = this.store.select(fromCountries.selectCountries);
  }

  getCountryDetails(name: string) {
    this.store.dispatch(CountryActions.getCountry({ name }));
    this.currentCountry$ = this.store.select(
      fromCountries.selectSelectedCountry
    );
  }
}
