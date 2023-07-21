import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-detailes',
  templateUrl: './country-detailes.component.html',
  styleUrls: ['./country-detailes.component.css']
})
export class CountryDetailesComponent implements OnInit{

  @Input() countryDetails: Country | any; 
  @Input() selectedOption: string = '';
  currentRegion: string='';   

  toggleDetails() {   
  
    if(this.selectedOption === 'Asia' || this.selectedOption === 'Europe'){
      this.currentRegion = this.selectedOption;
    }  

    return (this.selectedOption=== '' ||
      this.selectedOption=== 'Asia' ||
      this.selectedOption === 'Europe') ? false : true;
  };
  ngOnInit(): void {
    this.selectedOption = '';
  }

}
