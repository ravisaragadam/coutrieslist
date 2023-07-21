import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  getCountries(region: string): Observable<Country[]> {
    const url = `https://restcountries.com/v2/region/${region}`;
    return this.http.get<any>(url);
  }

  constructor(private http: HttpClient) {}
}
