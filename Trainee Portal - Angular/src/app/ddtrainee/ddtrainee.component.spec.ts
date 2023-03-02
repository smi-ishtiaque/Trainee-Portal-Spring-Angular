import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdtraineeComponent } from './ddtrainee.component';

describe('DdstudentsComponent', () => {
  let component: DdtraineeComponent;
  let fixture: ComponentFixture<DdtraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdtraineeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdtraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
