import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeetraineeComponent } from './jeetrainee.component';

describe('JeetraineeComponent', () => {
  let component: JeetraineeComponent;
  let fixture: ComponentFixture<JeetraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeetraineeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeetraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
