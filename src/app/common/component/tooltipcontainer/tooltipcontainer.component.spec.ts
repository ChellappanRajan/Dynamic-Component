import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipcontainerComponent } from './tooltipcontainer.component';

describe('TooltipcontainerComponent', () => {
  let component: TooltipcontainerComponent;
  let fixture: ComponentFixture<TooltipcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
