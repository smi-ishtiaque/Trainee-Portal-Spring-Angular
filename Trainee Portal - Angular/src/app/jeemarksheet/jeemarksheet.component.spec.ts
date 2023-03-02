import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeemarksheetComponent } from './jeemarksheet.component';

describe('JeemarksheetComponent', () => {
  let component: JeemarksheetComponent;
  let fixture: ComponentFixture<JeemarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeemarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeemarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
