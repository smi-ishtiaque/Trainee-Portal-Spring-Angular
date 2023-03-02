import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeetraineepanelComponent } from './jeetraineepanel.component';

describe('JeetraineepanelComponent', () => {
  let component: JeetraineepanelComponent;
  let fixture: ComponentFixture<JeetraineepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeetraineepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeetraineepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
