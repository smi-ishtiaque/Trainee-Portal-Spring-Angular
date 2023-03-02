import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeesmarksheetComponent } from './jeesmarksheet.component';

describe('JeesmarksheetComponent', () => {
  let component: JeesmarksheetComponent;
  let fixture: ComponentFixture<JeesmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeesmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeesmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
