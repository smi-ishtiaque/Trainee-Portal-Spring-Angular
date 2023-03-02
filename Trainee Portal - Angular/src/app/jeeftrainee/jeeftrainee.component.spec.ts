import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeefstudentsComponent } from './jeeftrainee.component';

describe('CefstudentsComponent', () => {
  let component: JeefstudentsComponent;
  let fixture: ComponentFixture<JeefstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeefstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeefstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
