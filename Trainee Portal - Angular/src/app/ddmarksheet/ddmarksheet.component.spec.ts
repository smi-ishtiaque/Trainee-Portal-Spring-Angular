import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdmarksheetComponent } from './ddmarksheet.component';

describe('DdmarksheetComponent', () => {
  let component: DdmarksheetComponent;
  let fixture: ComponentFixture<DdmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
