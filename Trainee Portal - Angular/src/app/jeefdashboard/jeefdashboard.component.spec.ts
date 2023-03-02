import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeefdashboardComponent } from './jeefdashboard.component';

describe('JeefdashboardComponent', () => {
  let component: JeefdashboardComponent;
  let fixture: ComponentFixture<JeefdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeefdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeefdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
