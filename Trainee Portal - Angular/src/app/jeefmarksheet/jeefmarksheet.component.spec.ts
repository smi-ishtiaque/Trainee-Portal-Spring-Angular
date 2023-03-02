import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeefmarksheetComponent } from './jeefmarksheet.component';

describe('JeefmarksheetComponent', () => {
  let component: JeefmarksheetComponent;
  let fixture: ComponentFixture<JeefmarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeefmarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeefmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
