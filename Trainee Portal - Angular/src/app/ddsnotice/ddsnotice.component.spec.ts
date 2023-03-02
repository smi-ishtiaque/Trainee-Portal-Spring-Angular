import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsnoticeComponent } from './ddsnotice.component';

describe('DdsnoticeComponent', () => {
  let component: DdsnoticeComponent;
  let fixture: ComponentFixture<DdsnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdsnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdsnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
