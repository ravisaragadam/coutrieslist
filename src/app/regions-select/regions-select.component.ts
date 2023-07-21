import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-regions-select',
  templateUrl: './regions-select.component.html',
  styleUrls: ['./regions-select.component.css'],
})
export class RegionsSelectComponent {
  @Input() dropDownData: any;
  @Output() selectedItemEvent = new EventEmitter<any>();

  regionsForm = new FormGroup({
    area: new FormControl(''),
  });

  getSelectedOption() {
    const selectedRegion = this.regionsForm.controls.area.value;
    this.selectedItemEvent.emit(selectedRegion);
  }
}
