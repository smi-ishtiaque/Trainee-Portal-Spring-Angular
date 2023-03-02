import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeesnoticeComponent } from './jeesnotice.component';

describe('JeesnoticeComponent', () => {
  let component: JeesnoticeComponent;
  let fixture: ComponentFixture<JeesnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeesnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeesnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
