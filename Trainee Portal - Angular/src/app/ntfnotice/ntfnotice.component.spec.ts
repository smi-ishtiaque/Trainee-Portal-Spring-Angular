import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtfnoticeComponent } from './ntfnotice.component';

describe('NtfnoticeComponent', () => {
  let component: NtfnoticeComponent;
  let fixture: ComponentFixture<NtfnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtfnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtfnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
