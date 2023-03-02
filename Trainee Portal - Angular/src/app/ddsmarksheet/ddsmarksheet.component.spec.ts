import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsmarksheetComponent } from './ddsmarksheet.component';

describe('DdsmarksheetComponent', () => {
  let component: DdsmarksheetComponent;
  let fixture: ComponentFixture<DdsmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdsmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdsmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
