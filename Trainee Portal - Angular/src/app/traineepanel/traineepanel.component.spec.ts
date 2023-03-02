import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineepanelComponent } from './traineepanel.component';

describe('TraineepanelComponent', () => {
  let component: TraineepanelComponent;
  let fixture: ComponentFixture<TraineepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
