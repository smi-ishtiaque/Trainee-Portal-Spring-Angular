import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdftraineeComponent } from './ddftrainee.component';

describe('DdfstudentsComponent', () => {
  let component: DdftraineeComponent;
  let fixture: ComponentFixture<DdftraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdftraineeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdftraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
