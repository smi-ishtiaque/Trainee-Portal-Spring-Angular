import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtsnoticeComponent } from './ntsnotice.component';

describe('NtsnoticeComponent', () => {
  let component: NtsnoticeComponent;
  let fixture: ComponentFixture<NtsnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtsnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtsnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
