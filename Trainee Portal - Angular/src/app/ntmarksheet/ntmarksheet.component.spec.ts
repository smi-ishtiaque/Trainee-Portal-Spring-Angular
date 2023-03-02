import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtmarksheetComponent } from './ntmarksheet.component';

describe('EemarksheetComponent', () => {
  let component: NtmarksheetComponent;
  let fixture: ComponentFixture<NtmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
