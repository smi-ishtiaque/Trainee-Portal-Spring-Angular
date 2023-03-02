import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NttraineeComponent } from './nttrainee.component';

describe('NtstudentsComponent', () => {
  let component: NttraineeComponent;
  let fixture: ComponentFixture<NttraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NttraineeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NttraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
