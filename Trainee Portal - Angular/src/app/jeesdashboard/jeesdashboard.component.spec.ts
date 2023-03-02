import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeesdashboardComponent } from './jeesdashboard.component';

describe('JeesdashboardComponent', () => {
  let component: JeesdashboardComponent;
  let fixture: ComponentFixture<JeesdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeesdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
