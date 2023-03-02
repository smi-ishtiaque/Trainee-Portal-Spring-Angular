import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdfmarksheetComponent } from './ddfmarksheet.component';

describe('DdfmarksheetComponent', () => {
  let component: DdfmarksheetComponent;
  let fixture: ComponentFixture<DdfmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdfmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdfmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
