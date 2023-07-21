import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsSelectComponent } from './regions-select.component';

describe('RegionsSelectComponent', () => {
  let component: RegionsSelectComponent;
  let fixture: ComponentFixture<RegionsSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionsSelectComponent]
    });
    fixture = TestBed.createComponent(RegionsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
