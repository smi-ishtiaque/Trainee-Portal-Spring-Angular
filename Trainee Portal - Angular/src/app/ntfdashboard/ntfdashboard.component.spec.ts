import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtfdashboardComponent } from './ntfdashboard.component';

describe('EefdashboardComponent', () => {
  let component: NtfdashboardComponent;
  let fixture: ComponentFixture<NtfdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtfdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtfdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
