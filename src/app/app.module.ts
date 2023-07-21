import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RegionsSelectComponent } from './regions-select/regions-select.component';
import { RegionsContainerComponent } from './regions-container/regions-container.component';
import { CountriesSelectComponent } from './countries-select/countries-select.component';
import { CountryDetailesComponent } from './country-detailes/country-detailes.component';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../app/app-store/reducers';
import { CountriesEffects } from './app-store/countries.effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegionsSelectComponent,
    RegionsContainerComponent,
    CountriesSelectComponent,
    CountryDetailesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CountriesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
