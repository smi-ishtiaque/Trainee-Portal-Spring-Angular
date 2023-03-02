import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtfacultypanelComponent } from './ntfacultypanel.component';

describe('NtfacultypanelComponent', () => {
  let component: NtfacultypanelComponent;
  let fixture: ComponentFixture<NtfacultypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtfacultypanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtfacultypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
