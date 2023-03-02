import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeefacultiesComponent } from './jeefaculties.component';

describe('JeefacultiesComponent', () => {
  let component: JeefacultiesComponent;
  let fixture: ComponentFixture<JeefacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeefacultiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeefacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
