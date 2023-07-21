import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromCountries from './countries.reducer';

export interface CountriesState {
    [fromCountries.countriesFeatureKey]: fromCountries.State;
}

export const reducers: ActionReducerMap<CountriesState> = {
    [fromCountries.countriesFeatureKey]: fromCountries.countriesReducer
};

// Composing the countries reducer's selectors.
export const selectCountriesState = createFeatureSelector<fromCountries.State>(
    fromCountries.countriesFeatureKey
);

export const selectCountriesEntitiesState = createSelector(
    selectCountriesState,
    (state) => state
);

export const selectCountriesError = createSelector(
    selectCountriesState,
    fromCountries.getError
);

export const selectCountries = createSelector(
    selectCountriesState,
    fromCountries.getCountries
);

export const selectSelectedCountry = createSelector(
    selectCountriesEntitiesState,
    fromCountries.getCountry
);

export const selectRegions = createSelector(
    selectCountriesState,
    fromCountries.getRegions
);

export const selectRegion = createSelector(
    selectCountriesState,
    fromCountries.getRegion
);
