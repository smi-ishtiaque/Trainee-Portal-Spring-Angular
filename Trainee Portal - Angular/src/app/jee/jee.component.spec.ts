import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JEEComponent } from './jee.component';

describe('JEEComponent', () => {
  let component: JEEComponent;
  let fixture: ComponentFixture<JEEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JEEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
