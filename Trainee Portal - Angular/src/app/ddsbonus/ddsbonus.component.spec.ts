import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsbonusComponent } from './ddsbonus.component';

describe('DdsfeesComponent', () => {
  let component: DdsbonusComponent;
  let fixture: ComponentFixture<DdsbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdsbonusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdsbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
