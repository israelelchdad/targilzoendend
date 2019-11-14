import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildPanelComponent } from './wild-panel.component';

describe('WildPanelComponent', () => {
  let component: WildPanelComponent;
  let fixture: ComponentFixture<WildPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
