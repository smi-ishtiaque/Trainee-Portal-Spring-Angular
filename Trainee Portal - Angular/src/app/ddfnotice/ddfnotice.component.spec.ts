import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdfnoticeComponent } from './ddfnotice.component';

describe('DdfnoticeComponent', () => {
  let component: DdfnoticeComponent;
  let fixture: ComponentFixture<DdfnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdfnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdfnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
