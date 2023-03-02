import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NttraineepanelComponent } from './nttraineepanel.component';

describe('NttraineepanelComponent', () => {
  let component: NttraineepanelComponent;
  let fixture: ComponentFixture<NttraineepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NttraineepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NttraineepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
