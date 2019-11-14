import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BistPanelComponent } from './bist-panel.component';

describe('BistPanelComponent', () => {
  let component: BistPanelComponent;
  let fixture: ComponentFixture<BistPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BistPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
