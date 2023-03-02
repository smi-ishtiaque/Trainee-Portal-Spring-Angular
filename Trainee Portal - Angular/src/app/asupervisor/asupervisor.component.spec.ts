import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsupervisorComponent } from './asupervisor.component';

describe('AsupervisorComponent', () => {
  let component: AsupervisorComponent;
  let fixture: ComponentFixture<AsupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
