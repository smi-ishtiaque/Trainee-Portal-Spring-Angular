import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdfdashboardComponent } from './ddfdashboard.component';

describe('DdfdashboardComponent', () => {
  let component: DdfdashboardComponent;
  let fixture: ComponentFixture<DdfdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdfdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdfdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
