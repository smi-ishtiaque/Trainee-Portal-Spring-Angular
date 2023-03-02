import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeefacultypanelComponent } from './jeefacultypanel.component';

describe('JeefacultypanelComponent', () => {
  let component:JeefacultypanelComponent;
  let fixture: ComponentFixture<JeefacultypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeefacultypanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeefacultypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
