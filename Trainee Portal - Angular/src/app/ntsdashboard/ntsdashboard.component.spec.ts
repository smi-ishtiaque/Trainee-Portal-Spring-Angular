import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtsdashboardComponent } from './ntsdashboard.component';

describe('NtsdashboardComponent', () => {
  let component: NtsdashboardComponent;
  let fixture: ComponentFixture<NtsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
