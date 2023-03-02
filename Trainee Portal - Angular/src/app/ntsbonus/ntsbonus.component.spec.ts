import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtsfeesComponent } from './ntsbonus.component';

describe('NtsfeesComponent', () => {
  let component: NtsfeesComponent;
  let fixture: ComponentFixture<NtsfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtsfeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtsfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
