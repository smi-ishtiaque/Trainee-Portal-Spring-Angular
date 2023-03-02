import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeesbonusComponent } from './jeesbonus.component';

describe('JeesfeesComponent', () => {
  let component: JeesbonusComponent;
  let fixture: ComponentFixture<JeesbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeesbonusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeesbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
