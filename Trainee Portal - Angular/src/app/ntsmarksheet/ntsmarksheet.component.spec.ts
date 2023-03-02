import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtsmarksheetComponent } from './ntsmarksheet.component';

describe('NtsmarksheetComponent', () => {
  let component: NtsmarksheetComponent;
  let fixture: ComponentFixture<NtsmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtsmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtsmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
