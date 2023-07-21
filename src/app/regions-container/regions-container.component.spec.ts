import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsContainerComponent } from './regions-container.component';

describe('RegionsContainerComponent', () => {
  let component: RegionsContainerComponent;
  let fixture: ComponentFixture<RegionsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionsContainerComponent]
    });
    fixture = TestBed.createComponent(RegionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
