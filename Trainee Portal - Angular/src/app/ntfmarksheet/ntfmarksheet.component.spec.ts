import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtfmarksheetComponent } from './ntfmarksheet.component';

describe('NtfmarksheetComponent', () => {
  let component: NtfmarksheetComponent;
  let fixture: ComponentFixture<NtfmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtfmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtfmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
