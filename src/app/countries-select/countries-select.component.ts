import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-countries-select',
  templateUrl: './countries-select.component.html',
  styleUrls: ['./countries-select.component.css']
})
export class CountriesSelectComponent {
  @Input() dropDownData: any;
  @Output() selectedItemEvent = new EventEmitter<any>();

  countriesForm = new FormGroup({
    area: new FormControl('')
  });

  getSelectedOption() {    
    this.selectedItemEvent.emit(this.countriesForm.controls.area.value);
  };
}
