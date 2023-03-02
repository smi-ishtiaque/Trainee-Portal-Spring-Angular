import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsdashboardComponent } from './ddsdashboard.component';

describe('DdsdashboardComponent', () => {
  let component: DdsdashboardComponent;
  let fixture: ComponentFixture<DdsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
