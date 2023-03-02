import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtfacultiesComponent } from './ntfaculties.component';

describe('NtfacultiesComponent', () => {
  let component: NtfacultiesComponent;
  let fixture: ComponentFixture<NtfacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtfacultiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtfacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
