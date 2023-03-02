import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdfacultiesComponent } from './ddfaculties.component';

describe('DdfacultiesComponent', () => {
  let component: DdfacultiesComponent;
  let fixture: ComponentFixture<DdfacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdfacultiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdfacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
