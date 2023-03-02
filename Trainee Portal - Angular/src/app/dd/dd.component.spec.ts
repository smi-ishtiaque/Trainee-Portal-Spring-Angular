import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDComponent } from './dd.component';

describe('DDComponent', () => {
  let component: DDComponent;
  let fixture: ComponentFixture<DDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
