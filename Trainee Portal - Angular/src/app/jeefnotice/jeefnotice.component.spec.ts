import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeefnoticeComponent } from './jeefnotice.component';

describe('JeefnoticeComponent', () => {
  let component: JeefnoticeComponent;
  let fixture: ComponentFixture<JeefnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeefnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeefnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
