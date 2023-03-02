import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtftraineeComponent } from './ntftrainee.component';

describe('NtfstudentsComponent', () => {
  let component: NtftraineeComponent;
  let fixture: ComponentFixture<NtftraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtftraineeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtftraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
